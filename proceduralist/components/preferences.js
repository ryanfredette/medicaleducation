/* ============================================================
   preferences.js – Preferences full page view with tabs and forms
   ============================================================ */

// Local active section state persists across re-renders of the page
let activePrefSection = 'procedures';

/**
 * Render the Preferences page view.
 */
function renderPreferencesPage() {
  const container = document.getElementById('app-content');
  if (!container) return;

  function renderPageContent() {
    const enabled = AppState.preferences.enabledProcedures;
    const kits = AppState.preferences.kitSelections;
    const thresholds = AppState.preferences.thresholds;
    const useRate = AppState.preferences.useRateFormat;

    // Dark Mode toggle state:
    //   'dark'  → on
    //   'light' → off
    //   'system' (default) → reflect what the OS is currently showing
    const themePref = AppState.preferences.theme || 'system';
    const systemPrefersDark = (typeof window.matchMedia === 'function')
      && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkModeOn = themePref === 'dark' || (themePref === 'system' && systemPrefersDark);

    // List of all procedures
    const procTitles = [
      'Arterial Line',
      'Arterial Blood Gas',
      'Central Venous Line',
      'Lumbar Puncture',
      'Nasogastric Tube',
      'Paracentesis',
      'Peripheral IV',
      'Phlebotomy',
      'Central Line Removal'
    ];

    // List of procedures that support kit selection
    const kitProcTitles = [
      'Arterial Line',
      'Central Venous Line',
      'Lumbar Puncture',
      'Paracentesis',
      'Peripheral IV'
    ];

    let sectionHtml = '';

    if (activePrefSection === 'procedures') {
      sectionHtml = `
        <div style="display:flex;flex-direction:column;gap:12px;">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;">
            Choose which procedures to display in the checklists, guides, and tracker list.
          </p>
          ${procTitles.map(title => {
            const isChecked = enabled[title] !== false;
            return `
              <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:12px 0;border-bottom:1px solid var(--border);">
                <span style="font-weight:600;font-size:0.95rem;color:var(--text);">${escapeHtml(title)}</span>
                <span class="toggle-switch">
                  <input type="checkbox" class="toggle-checkbox" data-pref-type="proc" data-title="${escapeHtml(title)}" ${isChecked ? 'checked' : ''} />
                  <span class="toggle-slider"></span>
                </span>
              </label>
            `;
          }).join('')}
          <button class="btn-secondary" id="reset-pref-proc" style="margin-top:16px;padding:12px;font-size:0.9rem;">Reset Visibility Defaults</button>
        </div>
      `;
    } else if (activePrefSection === 'kits') {
      sectionHtml = `
        <div style="display:flex;flex-direction:column;gap:20px;">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;">
            Select default kits for each procedure. Checklists will dynamically update to display contents based on your selection.
          </p>
          ${kitProcTitles.map(title => {
            const currentSelection = kits[title] || 'No Kit';
            const options = typeof getKitOptions === 'function' ? getKitOptions(title) : ['No Kit'];
            return `
              <div>
                <label for="kit-select-${title}" style="display:block;font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;text-transform:uppercase;">
                  ${escapeHtml(title)}
                </label>
                <select id="kit-select-${title}" class="kit-selector" data-title="${escapeHtml(title)}"
                        style="width:100%;padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border);font-family:inherit;font-size:0.95rem;background:var(--bg-elevated);color:var(--text);">
                  ${options.map(opt => `<option value="${escapeHtml(opt)}" ${opt === currentSelection ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}
                </select>
              </div>
            `;
          }).join('')}
          <button class="btn-secondary" id="reset-pref-kits" style="margin-top:16px;padding:12px;font-size:0.9rem;">Reset Kits Defaults</button>
        </div>
      `;
    } else if (activePrefSection === 'thresholds') {
      sectionHtml = `
        <div style="display:flex;flex-direction:column;gap:14px;">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;">
            Adjust numeric completion goals for practice tracking. Counts turn green once goals are reached.
          </p>
          ${procTitles.map(title => {
            const currentVal = thresholds[title] || 5;
            return `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);">
                <label for="threshold-input-${title}" style="font-weight:600;font-size:0.95rem;color:var(--text);">${escapeHtml(title)}</label>
                <input type="number" id="threshold-input-${title}" class="threshold-input" data-title="${escapeHtml(title)}"
                       value="${currentVal}" min="1" max="99" 
                       style="width:65px;padding:8px 10px;border-radius:var(--radius-xs);border:1px solid var(--border);font-family:inherit;font-size:0.95rem;text-align:center;background:var(--bg-elevated);color:var(--text);" />
              </div>
            `;
          }).join('')}
          <button class="btn-secondary" id="reset-pref-thresholds" style="margin-top:16px;padding:12px;font-size:0.9rem;">Reset Goal Defaults</button>
        </div>
      `;
    } else if (activePrefSection === 'general') {
      sectionHtml = `
        <div style="display:flex;flex-direction:column;gap:20px;">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;">
            Configure other display behaviors.
          </p>

          <label style="display:flex;align-items:flex-start;justify-content:space-between;cursor:pointer;padding:12px 0;border-bottom:1px solid var(--border);">
            <div style="margin-right:16px;">
              <span style="font-weight:600;font-size:0.95rem;color:var(--text);display:block;">Dark Mode</span>
              <span style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;display:block;line-height:1.45;">
                Force a dark color scheme. When off, the app uses a light scheme. (Reset clears the override and falls back to your system preference.)
              </span>
            </div>
            <span class="toggle-switch" style="margin-top:4px;">
              <input type="checkbox" id="pref-dark-mode" class="toggle-checkbox" ${darkModeOn ? 'checked' : ''} />
              <span class="toggle-slider"></span>
            </span>
          </label>

          <label style="display:flex;align-items:flex-start;justify-content:space-between;cursor:pointer;padding:12px 0;">
            <div style="margin-right:16px;">
              <span style="font-weight:600;font-size:0.95rem;color:var(--text);display:block;">Rare Complications Format</span>
              <span style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;display:block;line-height:1.45;">
                Convert rates below 1% into "1 per X" rather than raw percentages (e.g., "1 per 10,000" instead of "0.01%").
              </span>
            </div>
            <span class="toggle-switch" style="margin-top:4px;">
              <input type="checkbox" id="pref-rate-format" class="toggle-checkbox" ${useRate ? 'checked' : ''} />
              <span class="toggle-slider"></span>
            </span>
          </label>

          <button class="btn-secondary" id="reset-pref-other" style="margin-top:16px;padding:12px;font-size:0.9rem;">Reset General Settings</button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="page-container fade-in" id="preferences-page-container" style="padding-bottom: 40px; max-width: 600px;">
        <!-- Back Button -->
        <button class="btn-icon" id="preferences-back" style="margin-bottom: 16px;">
          <i data-lucide="arrow-left" style="width:20px;height:20px;"></i>
          <span>Back</span>
        </button>

        <!-- Title & Header -->
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--text);margin-bottom:24px;">Preferences</h2>

        <div style="display:flex;flex-direction:column;gap:20px;">
          <!-- Tabs Menu -->
          <div style="display:flex;border-bottom:2px solid var(--border);padding-bottom:1px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;margin-bottom:4px;">
            <button class="pref-tab ${activePrefSection === 'procedures' ? 'active' : ''}" data-section="procedures" style="background:none;border:none;padding:10px 16px;font-family:inherit;font-size:0.88rem;font-weight:700;color:${activePrefSection === 'procedures' ? 'var(--sage-dark)' : 'var(--text-secondary)'};border-bottom:${activePrefSection === 'procedures' ? '2px solid var(--sage-dark)' : '2px solid transparent'};margin-bottom:-2px;cursor:pointer;white-space:nowrap;">Procedures</button>
            <button class="pref-tab ${activePrefSection === 'kits' ? 'active' : ''}" data-section="kits" style="background:none;border:none;padding:10px 16px;font-family:inherit;font-size:0.88rem;font-weight:700;color:${activePrefSection === 'kits' ? 'var(--sage-dark)' : 'var(--text-secondary)'};border-bottom:${activePrefSection === 'kits' ? '2px solid var(--sage-dark)' : '2px solid transparent'};margin-bottom:-2px;cursor:pointer;white-space:nowrap;">Kits</button>
            <button class="pref-tab ${activePrefSection === 'thresholds' ? 'active' : ''}" data-section="thresholds" style="background:none;border:none;padding:10px 16px;font-family:inherit;font-size:0.88rem;font-weight:700;color:${activePrefSection === 'thresholds' ? 'var(--sage-dark)' : 'var(--text-secondary)'};border-bottom:${activePrefSection === 'thresholds' ? '2px solid var(--sage-dark)' : '2px solid transparent'};margin-bottom:-2px;cursor:pointer;white-space:nowrap;">Goals</button>
            <button class="pref-tab ${activePrefSection === 'general' ? 'active' : ''}" data-section="general" style="background:none;border:none;padding:10px 16px;font-family:inherit;font-size:0.88rem;font-weight:700;color:${activePrefSection === 'general' ? 'var(--sage-dark)' : 'var(--text-secondary)'};border-bottom:${activePrefSection === 'general' ? '2px solid var(--sage-dark)' : '2px solid transparent'};margin-bottom:-2px;cursor:pointer;white-space:nowrap;">General</button>
          </div>

          <!-- Selected Preferences Form Section -->
          <div id="preferences-form-content" style="padding-right:4px;">
            ${sectionHtml}
          </div>
        </div>
      </div>
    `;

    // Bind back button click
    document.getElementById('preferences-back').addEventListener('click', () => {
      navigateBack();
    });

    // Bind tab clicks
    document.querySelectorAll('.pref-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        activePrefSection = e.target.dataset.section;
        renderPageContent();
      });
    });

    // Bind inputs changes and write directly to AppState
    
    // Visibility checklist items
    const procCheckboxes = document.querySelectorAll('input[data-pref-type="proc"]');
    procCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        AppState.preferences.enabledProcedures[cb.dataset.title] = cb.checked;
        AppState.save();
      });
    });

    // Kit dropdown selectors
    const kitSelects = document.querySelectorAll('.kit-selector');
    kitSelects.forEach(select => {
      select.addEventListener('change', () => {
        AppState.preferences.kitSelections[select.dataset.title] = select.value;
        AppState.save();
      });
    });

    // Goal threshold number inputs
    const thresholdInputs = document.querySelectorAll('.threshold-input');
    thresholdInputs.forEach(input => {
      input.addEventListener('change', () => {
        const val = parseInt(input.value, 10);
        if (!isNaN(val) && val > 0) {
          AppState.preferences.thresholds[input.dataset.title] = val;
          AppState.save();
        }
      });
    });

    // Format toggle checkbox
    const formatCb = document.getElementById('pref-rate-format');
    if (formatCb) {
      formatCb.addEventListener('change', () => {
        AppState.preferences.useRateFormat = formatCb.checked;
        AppState.save();
      });
    }

    // Dark Mode toggle — locks theme to 'dark' or 'light' (overriding system).
    const darkCb = document.getElementById('pref-dark-mode');
    if (darkCb) {
      darkCb.addEventListener('change', () => {
        AppState.preferences.theme = darkCb.checked ? 'dark' : 'light';
        AppState.save();
        if (typeof applyTheme === 'function') applyTheme();
      });
    }

    // Reset Buttons Hookups
    const resetProc = document.getElementById('reset-pref-proc');
    if (resetProc) {
      resetProc.addEventListener('click', () => {
        AppState.resetPreferencesSection('procedures');
        renderPageContent();
      });
    }

    const resetKits = document.getElementById('reset-pref-kits');
    if (resetKits) {
      resetKits.addEventListener('click', () => {
        AppState.resetPreferencesSection('kits');
        renderPageContent();
      });
    }

    const resetThresholds = document.getElementById('reset-pref-thresholds');
    if (resetThresholds) {
      resetThresholds.addEventListener('click', () => {
        AppState.resetPreferencesSection('thresholds');
        renderPageContent();
      });
    }

    const resetOther = document.getElementById('reset-pref-other');
    if (resetOther) {
      resetOther.addEventListener('click', () => {
        AppState.resetPreferencesSection('other');
        renderPageContent();
      });
    }

    // Reinitialize icons
    if (typeof refreshIcons === 'function') {
      refreshIcons();
    }
  }

  renderPageContent();
}
