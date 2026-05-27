/* ============================================================
   supplies-page.js – Supplies listing & detail views
   ============================================================ */

/**
 * Render the Supplies listing page.
 * Shows all procedures that have supplies, filtered by enabled
 * procedures and the active kit selection.
 */
function renderSuppliesPage() {
  const container = document.getElementById('app-content');

  // Gather filtered supplies using global helper
  const allSupplies = typeof getFilteredSupplies === 'function'
    ? getFilteredSupplies(AppState.preferences.kitSelections, AppState.preferences.enabledProcedures)
    : [];

  container.innerHTML = `
    <div class="page-container fade-in">
      <div class="search-bar" style="margin-bottom:20px;">
        <i data-lucide="search" style="width:18px;height:18px;color:var(--text-muted);"></i>
        <input id="supplies-search" type="text" placeholder="Search procedures" autocomplete="off" />
      </div>
      <div id="supplies-list"></div>
    </div>
  `;

  const searchInput = document.getElementById('supplies-search');
  const listContainer = document.getElementById('supplies-list');

  let currentFilteredList = [];

  function renderList() {
    const query = searchInput.value;
    currentFilteredList = filterBySearch(allSupplies, query, 'title', 'subtitle');

    if (currentFilteredList.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center;padding:48px 16px;color:var(--text-muted);">
          <i data-lucide="package-open" style="width:48px;height:48px;margin-bottom:12px;"></i>
          <p style="font-size:1rem;font-weight:600;">No supplies found</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    listContainer.innerHTML = currentFilteredList.map((s, i) => `
      <div class="list-item" data-supply-index="${i}" id="supply-item-${i}"
           style="cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;">
        <div>
          <div style="font-weight:600;font-size:0.95rem;">${escapeHtml(s.title)}</div>
          ${s.subtitle ? `<div style="font-size:0.8rem;color:var(--text-muted);margin-top:2px;">${escapeHtml(s.subtitle)}</div>` : ''}
        </div>
        <i data-lucide="chevron-right" style="width:18px;height:18px;color:var(--text-muted);flex-shrink:0;"></i>
      </div>
    `).join('');

    refreshIcons();
  }

  // Register listener once on the listContainer
  listContainer.addEventListener('click', (e) => {
    const item = e.target.closest('[data-supply-index]');
    if (!item) return;
    const idx = parseInt(item.dataset.supplyIndex, 10);
    if (currentFilteredList[idx]) {
      AppState.navigateTo('supplyDetail', currentFilteredList[idx]);
    }
  });

  searchInput.addEventListener('input', renderList);
  renderList();
  refreshIcons();
}

/**
 * Render the supply detail view for a specific procedure's supplies.
 */
function renderSupplyDetail(supplyData) {
  const container = document.getElementById('app-content');

  // Local checked state
  const checkedSet = new Set();
  const expandedKits = new Set();

  // Build display name
  const displayName = supplyData.subtitle
    ? `${supplyData.title}: ${supplyData.subtitle}`
    : supplyData.title;

  function render() {
    const requiredItems = _sortChecked(supplyData.checklistItems || [], checkedSet);
    const optionalItems = _sortChecked(supplyData.optionalItems || [], checkedSet);
    const images = supplyData.allHeaderImages || supplyData.headerImageNames || [];
    const singleImage = supplyData.headerImageName;

    let imageHtml = '';
    const allImages = images.length > 0 ? images : (singleImage ? [singleImage] : []);
    if (allImages.length > 0) {
      imageHtml = `
        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:20px;width:100%;">
          ${allImages.map(img => `
            <div class="card" style="width:100%;padding:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;box-sizing:border-box;">
              <img src="images/${encodeURIComponent(img)}.jpg" onclick="openFullscreenImage(this.src, this.alt)" style="width:100%;height:auto;max-height:360px;object-fit:cover;border-radius:var(--radius-sm);border:1px solid rgba(0,0,0,0.05);cursor:pointer;" alt="${escapeHtml(img)}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23888\' stroke-width=\'2\'><rect x=\'3\' y=\'3\' width=\'18\' height=\'18\' rx=\'2\' ry=\'2\'/><circle cx=\'8.5\' cy=\'8.5\' r=\'1.5\'/><polyline points=\'21 15 16 10 5 21\'/></svg>';" />
            </div>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="page-container fade-in" id="supply-detail-container">
        <button class="btn-icon" id="supply-detail-back" style="margin-bottom:16px;">
          <i data-lucide="arrow-left" style="width:20px;height:20px;"></i>
          <span>Supplies</span>
        </button>

        <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:16px;">${escapeHtml(displayName)}</h2>

        ${imageHtml}

        ${requiredItems.length > 0 ? `
          <h3 style="font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin:20px 0 10px;">Required</h3>
          <div id="supply-required-list">
            ${requiredItems.map((item, i) => _renderSupplyItem(item, i, 'req', checkedSet, expandedKits)).join('')}
          </div>
        ` : ''}

        ${optionalItems.length > 0 ? `
          <h3 style="font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin:20px 0 10px;">Optional</h3>
          <div id="supply-optional-list">
            ${optionalItems.map((item, i) => _renderSupplyItem(item, i, 'opt', checkedSet, expandedKits)).join('')}
          </div>
        ` : ''}
      </div>
    `;

    // Back button
    document.getElementById('supply-detail-back').addEventListener('click', () => {
      AppState.navigateBack();
    });

    // Checkbox + expansion delegation on the transient detail container
    const detailContainer = document.getElementById('supply-detail-container');
    detailContainer.addEventListener('click', function handler(e) {
      const checkBtn = e.target.closest('[data-check-id]');
      if (checkBtn) {
        const id = checkBtn.dataset.checkId;
        if (checkedSet.has(id)) {
          checkedSet.delete(id);
        } else {
          checkedSet.add(id);
        }
        render();
        return;
      }

      const kitToggle = e.target.closest('[data-kit-toggle]');
      if (kitToggle) {
        const id = kitToggle.dataset.kitToggle;
        if (expandedKits.has(id)) {
          expandedKits.delete(id);
        } else {
          expandedKits.add(id);
        }
        render();
        return;
      }
    });

    refreshIcons();
  }

  render();
}

// ── Private Helpers ──────────────────────────────────────────


function _sortChecked(items, checkedSet) {
  if (!items || items.length === 0) return [];
  // Assign stable IDs if not present
  const withId = items.map((item, idx) => ({
    ...item,
    _id: item.id || item.name + '_' + idx
  }));
  // Sort: unchecked first, then checked (preserve original order within groups)
  return [...withId].sort((a, b) => {
    const aChecked = checkedSet.has(a._id) ? 1 : 0;
    const bChecked = checkedSet.has(b._id) ? 1 : 0;
    return aChecked - bChecked;
  });
}

function _renderSupplyItem(item, index, prefix, checkedSet, expandedKits) {
  const id = item._id || item.name + '_' + index;
  const isChecked = checkedSet.has(id);
  const isKit = item.contents && item.contents.length > 0;
  const isExpanded = expandedKits.has(id);

  const checkIcon = isChecked ? 'check-square' : 'square';
  const checkedStyle = isChecked ? 'opacity:0.5;text-decoration:line-through;' : '';

  let contentsHtml = '';
  if (isKit && isExpanded) {
    contentsHtml = `
      <div style="padding:8px 0 4px 44px;">
        ${item.contents.map(c => `
          <div style="display:flex;align-items:flex-start;gap:8px;padding:3px 0;">
            <span style="color:var(--text-muted);font-size:0.5rem;margin-top:6px;">●</span>
            <span style="font-size:0.88rem;color:var(--text-secondary);">${escapeHtml(c)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  const kitChevron = isKit
    ? `<span data-kit-toggle="${id}" style="cursor:pointer;display:flex;align-items:center;padding:4px;">
         <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" style="width:16px;height:16px;color:var(--text-muted);"></i>
       </span>`
    : '';

  return `
    <div class="list-item" style="padding:10px 16px;${isChecked ? 'opacity:0.6;' : ''}" id="${prefix}-supply-${index}">
      <div style="display:flex;align-items:flex-start;gap:12px;width:100%;">
        <button data-check-id="${id}" style="background:none;border:none;cursor:pointer;padding:2px;flex-shrink:0;margin-top:1px;">
          <i data-lucide="${checkIcon}" style="width:20px;height:20px;color:var(--sage);"></i>
        </button>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="${checkedStyle}font-size:0.93rem;">${escapeHtml(item.name)}</span>
            ${kitChevron}
          </div>
          ${item.caption ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">${escapeHtml(item.caption)}</div>` : ''}
        </div>
      </div>
      ${contentsHtml}
    </div>
  `;
}
