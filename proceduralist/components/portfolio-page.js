/* ============================================================
   portfolio-page.js – Procedure Tracker (counters + log history)
   Mirrors the iOS Swift TrackerPage: procedures section with
   inc/dec controls, log history with filter dropdown, and a
   decrement-confirmation prompt that mirrors the Swift alert.
   ============================================================ */

// Persists across rerenders. null = "All Procedures".
let trackerLogFilter = null;

// Inline SVG chevron for the native <select>. Encoded so it embeds in CSS
// background-image. Uses the sage-dark color to match the pill text.
const _TRACKER_CHEVRON_SVG = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgb(120,155,100)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'
);

/**
 * Render the Portfolio / Tracker page.
 */
function renderPortfolioPage() {
  const container = document.getElementById('app-content');

  // The iOS app's TrackerStore hardcodes 8 procedures and does NOT
  // filter the tracker by visibility preferences. We match that.
  const procTitles = Object.keys(AppState.procedureCounts);

  // ── Procedures section (counter rows) ──────────────────────
  const procedureRows = procTitles.map(procTitle => {
    const count = AppState.procedureCounts[procTitle] || 0;
    const threshold = AppState.preferences.thresholds[procTitle] || 5;
    const met = count >= threshold;

    return `
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;">
        <div>
          <div style="font-weight:700;font-size:0.95rem;color:var(--text);">${escapeHtml(procTitle)}</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">
            Target: ${threshold} completions
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:16px;">
          <span class="counter-value ${met ? 'met' : ''}"
                style="font-size:1.15rem;font-weight:800;min-width:48px;text-align:right;color:${met ? 'var(--sage-dark)' : 'var(--text-secondary)'};">
            ${count} / ${threshold}
          </span>
          <div style="display:flex;gap:6px;">
            <button class="btn-icon count-btn" data-action="dec" data-proc="${escapeHtml(procTitle)}"
                    style="width:32px;height:32px;" aria-label="Decrement count">
              <i data-lucide="minus" style="width:14px;height:14px;"></i>
            </button>
            <button class="btn-icon count-btn" data-action="inc" data-proc="${escapeHtml(procTitle)}"
                    style="width:32px;height:32px;" aria-label="Increment count">
              <i data-lucide="plus" style="width:14px;height:14px;"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // ── Log History filter (native <select>) ───────────────────
  // Native <select> opens the platform's native picker on Android,
  // matching Swift's Menu which uses iOS's native picker. Avoids the
  // WebView's flaky custom-absolute-dropdown layout in flex containers.
  const filterOptions = ['All Procedures', ...procTitles];
  const filterSelectHtml = `
    <select id="tracker-filter-select"
            style="appearance:none;-webkit-appearance:none;-moz-appearance:none;
                   background-color:var(--sage-light);
                   background-image:url('data:image/svg+xml;utf8,${_TRACKER_CHEVRON_SVG}');
                   background-repeat:no-repeat;background-position:right 10px center;
                   border:1.5px solid var(--sage);border-radius:99px;
                   color:var(--sage-dark);font-family:inherit;font-size:0.78rem;font-weight:700;
                   padding:6px 28px 6px 14px;cursor:pointer;outline:none;">
      ${filterOptions.map(opt => {
        const isSelected = (opt === 'All Procedures' && trackerLogFilter === null) || opt === trackerLogFilter;
        return `<option value="${escapeHtml(opt)}"${isSelected ? ' selected' : ''}>${escapeHtml(opt)}</option>`;
      }).join('')}
    </select>
  `;

  container.innerHTML = `
    <div class="page-container fade-in" id="portfolio-container">
      <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:16px;color:var(--text);">Procedure Tracker</h2>

      <!-- ===== PROCEDURES SECTION ===== -->
      <h3 style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:10px;">Procedures</h3>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:28px;">
        ${procedureRows}
      </div>

      <!-- ===== LOG HISTORY SECTION ===== -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:12px;">
        <h3 style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em;margin:0;">Log History</h3>
        ${filterSelectHtml}
      </div>
      <div id="log-history-list" style="display:flex;flex-direction:column;gap:10px;">
        <!-- Injected by _renderLogHistory -->
      </div>
    </div>
  `;

  // Counter +/- event delegation on the portfolio container.
  const portfolioContainer = document.getElementById('portfolio-container');
  portfolioContainer.addEventListener('click', (e) => {
    const countBtn = e.target.closest('.count-btn');
    if (!countBtn) return;
    const action = countBtn.dataset.action;
    const procTitle = countBtn.dataset.proc;
    if (action === 'inc') _incrementProcedure(procTitle);
    else if (action === 'dec') _decrementProcedure(procTitle);
  });

  // Filter <select> change handler — re-renders just the log list.
  const filterSelect = document.getElementById('tracker-filter-select');
  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      const v = filterSelect.value;
      trackerLogFilter = (v === 'All Procedures') ? null : v;
      _renderLogHistory();
    });
  }

  _renderLogHistory();
  refreshIcons();
}

/**
 * Render history items list in reverse-chronological order, optionally
 * filtered by trackerLogFilter (procedure title).
 */
function _renderLogHistory() {
  const listContainer = document.getElementById('log-history-list');
  if (!listContainer) return;

  const allLogs = AppState.procedureLogs || [];
  const logs = trackerLogFilter
    ? allLogs.filter(l => l.procedureTitle === trackerLogFilter)
    : allLogs;

  if (logs.length === 0) {
    const emptyMsg = trackerLogFilter
      ? `No history for ${escapeHtml(trackerLogFilter)} yet`
      : 'No history logged yet';
    listContainer.innerHTML = `
      <div style="text-align:center;padding:32px 16px;color:var(--text-muted);background:rgba(0,0,0,0.01);border:1.5px dashed var(--border);border-radius:var(--radius);">
        <i data-lucide="history" style="width:36px;height:36px;color:var(--text-muted);margin-bottom:8px;"></i>
        <p style="font-size:0.85rem;font-weight:600;">${emptyMsg}</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  // Sort logs: newest first
  const sortedLogs = [...logs].sort((a, b) => new Date(b.date) - new Date(a.date));

  listContainer.innerHTML = sortedLogs.map(log => `
    <div class="card log-entry-card" id="log-card-${log.id}" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-left:4px solid var(--sage-dark);">
      <div>
        <div style="font-weight:650;font-size:0.9rem;color:var(--text);">${escapeHtml(log.procedureTitle)}</div>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;display:flex;align-items:center;gap:4px;">
          <i data-lucide="calendar" style="width:12px;height:12px;"></i>
          <span>${formatDate(log.date)}</span>
        </div>
      </div>
      <div style="display:flex;gap:6px;">
        <button class="btn-icon edit-log-btn" data-id="${log.id}" style="width:32px;height:32px;color:var(--text-secondary);" aria-label="Edit date">
          <i data-lucide="calendar" style="width:14px;height:14px;"></i>
        </button>
        <button class="btn-icon delete-log-btn" data-id="${log.id}" style="width:32px;height:32px;color:var(--red);" aria-label="Delete entry">
          <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Event handlers
  listContainer.querySelectorAll('.edit-log-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _openEditDateModal(btn.dataset.id);
    });
  });

  listContainer.querySelectorAll('.delete-log-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _confirmDeleteLog(btn.dataset.id);
    });
  });

  refreshIcons();
}

// ── State Change Handlers ─────────────────────────────────────

/**
 * Increment a procedure's count and append a new log entry for today.
 * Mirrors Swift's TrackerStore.increment(_:).
 */
function _incrementProcedure(procTitle, customDate = null) {
  AppState.procedureCounts[procTitle] = (AppState.procedureCounts[procTitle] || 0) + 1;

  const date = customDate || new Date().toISOString().split('T')[0];
  const newLog = {
    id: generateId(),
    procedureTitle: procTitle,
    date
  };
  AppState.procedureLogs.push(newLog);

  AppState.save();
  renderPortfolioPage();
}

/**
 * Decrement a procedure. If the procedure has at least one log, prompt
 * to confirm removing the most recent one (Swift behavior). If count > 0
 * but no log exists (legacy data), just decrement silently.
 */
function _decrementProcedure(procTitle) {
  const currentCount = AppState.procedureCounts[procTitle] || 0;
  if (currentCount <= 0) return;

  // Find the most recent log of this type, if any
  const matchingLogs = AppState.procedureLogs.filter(l => l.procedureTitle === procTitle);
  if (matchingLogs.length === 0) {
    // No log to confirm against — just decrement count.
    AppState.procedureCounts[procTitle] = currentCount - 1;
    AppState.save();
    renderPortfolioPage();
    return;
  }
  matchingLogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  const mostRecent = matchingLogs[0];

  // Show Swift-equivalent confirmation alert.
  const html = `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <p style="font-size:0.95rem;color:var(--text);line-height:1.5;margin:0;">
        This will delete the most recent <strong>${escapeHtml(procTitle)}</strong> log from <strong>${formatDate(mostRecent.date)}</strong>.
      </p>
      <div style="display:flex;gap:12px;margin-top:4px;">
        <button class="btn-secondary" id="dec-cancel-btn" style="flex:1;padding:12px;">Cancel</button>
        <button class="btn-danger" id="dec-confirm-btn" style="flex:1;padding:12px;background:var(--red);color:white;border:none;border-radius:var(--radius-sm);cursor:pointer;font-weight:600;">Delete</button>
      </div>
    </div>
  `;

  showModal('Remove Log?', html);

  document.getElementById('dec-cancel-btn').addEventListener('click', hideModal);
  document.getElementById('dec-confirm-btn').addEventListener('click', () => {
    AppState.procedureCounts[procTitle] = currentCount - 1;
    AppState.procedureLogs = AppState.procedureLogs.filter(l => l.id !== mostRecent.id);
    AppState.save();
    hideModal();
    renderPortfolioPage();
  });
}

// ── Modals (Edit date / Delete log) ───────────────────────────

function _openEditDateModal(logId) {
  const log = AppState.procedureLogs.find(l => l.id === logId);
  if (!log) return;

  const today = new Date().toISOString().split('T')[0];

  const html = `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <span style="font-size:0.85rem;color:var(--text-secondary);font-weight:500;">Editing log date for:</span>
        <div style="font-weight:750;font-size:1.05rem;color:var(--text);margin-top:2px;">${escapeHtml(log.procedureTitle)}</div>
      </div>
      <div>
        <label for="edit-log-date-input" style="display:block;font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;text-transform:uppercase;">Select New Date</label>
        <input type="date" id="edit-log-date-input" value="${log.date}" max="${today}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--border);font-family:inherit;font-size:0.9rem;background:var(--bg-elevated);color:var(--text);" />
      </div>
      <button class="btn-primary" id="modal-save-edit-btn" style="width:100%;margin-top:8px;padding:12px;">Save Date</button>
    </div>
  `;

  showModal('Edit Entry Date', html);

  document.getElementById('modal-save-edit-btn').addEventListener('click', () => {
    const input = document.getElementById('edit-log-date-input');
    if (input && input.value) {
      log.date = input.value;
      AppState.save();
      hideModal();
      renderPortfolioPage();
    }
  });
}

function _confirmDeleteLog(logId) {
  const log = AppState.procedureLogs.find(l => l.id === logId);
  if (!log) return;

  const html = `
    <div style="display:flex;flex-direction:column;gap:16px;text-align:center;">
      <p style="font-size:0.95rem;color:var(--text-secondary);line-height:1.5;">
        Are you sure you want to delete the log for <strong>${escapeHtml(log.procedureTitle)}</strong> from <strong>${formatDate(log.date)}</strong>? This will decrement the total completions count.
      </p>
      <div style="display:flex;gap:12px;margin-top:8px;">
        <button class="btn-secondary" id="delete-cancel-btn" style="flex:1;padding:12px;">Cancel</button>
        <button class="btn-danger" id="delete-confirm-btn" style="flex:1;padding:12px;background:var(--red);color:white;border:none;border-radius:var(--radius-sm);cursor:pointer;font-weight:600;">Delete</button>
      </div>
    </div>
  `;

  showModal('Delete Log Entry?', html);

  document.getElementById('delete-cancel-btn').addEventListener('click', hideModal);
  document.getElementById('delete-confirm-btn').addEventListener('click', () => {
    if (AppState.procedureCounts[log.procedureTitle] > 0) {
      AppState.procedureCounts[log.procedureTitle] -= 1;
    }
    AppState.procedureLogs = AppState.procedureLogs.filter(l => l.id !== logId);
    AppState.save();
    hideModal();
    renderPortfolioPage();
  });
}
