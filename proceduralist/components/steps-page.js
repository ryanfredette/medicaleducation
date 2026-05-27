/* ============================================================
   steps-page.js – Procedures list view with category filters
   ============================================================ */

/**
 * Render the Steps/Procedures page.
 */
function renderStepsPage() {
  const container = document.getElementById('app-content');

  // Load from STEPS_DATA (global from data/steps-data.js)
  const allProcedures = typeof STEPS_DATA !== 'undefined' ? STEPS_DATA : [];

  // Local state for active category filter
  let activeCategory = 'all';

  container.innerHTML = `
    <div class="page-container fade-in">
      <!-- Search Bar -->
      <div class="search-bar" style="margin-bottom:20px;">
        <i data-lucide="search" style="width:18px;height:18px;color:var(--text-muted);"></i>
        <input id="steps-search" type="text" placeholder="Search procedures" autocomplete="off" />
      </div>

      <!-- Category Filter Chips -->
      <div class="chips-container" id="category-chips-bar" style="display:flex;gap:8px;overflow-x:auto;padding-bottom:12px;margin-bottom:20px;scrollbar-width:none;-ms-overflow-style:none;">
        <button class="chip active" data-category="all">All</button>
        <button class="chip" data-category="vascularAccess">Vascular Access</button>
        <button class="chip" data-category="diagnosticSampling">Diagnostic Sampling</button>
        <button class="chip" data-category="fluidDrainage">Fluid Drainage</button>
        <button class="chip" data-category="airwayAndTubes">Airway & Tubes</button>
      </div>

      <!-- Grid of Procedure Cards -->
      <div class="card-grid" id="steps-grid"></div>
    </div>
  `;

  const searchInput = document.getElementById('steps-search');
  const chipsBar = document.getElementById('category-chips-bar');
  const gridContainer = document.getElementById('steps-grid');

  function renderGrid() {
    const query = searchInput.value;
    
    // Filter by preferences: only show procedures that are enabled in Preferences
    let filtered = allProcedures.filter(p => {
      const isEnabled = AppState.preferences.enabledProcedures[p.title] !== false;
      return isEnabled;
    });

    // Filter by active category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search text (title, subtitle)
    filtered = filterBySearch(filtered, query, 'title', 'subtitle');

    // If viewing 'All' categories, sort alphabetically A-Z
    if (activeCategory === 'all') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px 16px;color:var(--text-muted);">
          <i data-lucide="info" style="width:48px;height:48px;margin-bottom:12px;"></i>
          <p style="font-size:1rem;font-weight:600;">No procedures found</p>
          <p style="font-size:0.85rem;margin-top:4px;">Check if they are disabled in Preferences.</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    gridContainer.innerHTML = filtered.map((p, idx) => {
      const meta = CATEGORY_META[p.category] || CATEGORY_META.vascularAccess;
      const stepCount = p.steps ? p.steps.length : 0;
      
      // Select appropriate icon
      let displayIcon = p.iconName || meta.icon;
      // Map SF symbols if any to Lucide icons
      if (displayIcon === 'waveform.path.ecg') displayIcon = 'activity';
      if (displayIcon === 'syringe.fill') displayIcon = 'syringe';
      if (displayIcon === 'lungs.fill') displayIcon = 'wind';
      if (displayIcon === 'ivfluid.bag') displayIcon = 'droplet';
      if (displayIcon === 'bandage.fill') displayIcon = 'bandage';

      return `
        <div class="card procedure-card" data-proc-id="${p.id}" id="proc-card-${p.id}"
             style="cursor:pointer;position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:140px;border-left:5px solid ${meta.color};">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
              <span class="category-badge" style="background:${meta.bg};color:${meta.color};font-size:0.75rem;padding:4px 8px;border-radius:99px;font-weight:600;">
                ${meta.label}
              </span>
              <div style="width:36px;height:36px;border-radius:50%;background:${meta.bg};color:${meta.color};display:flex;align-items:center;justify-content:center;">
                <i data-lucide="${displayIcon}" style="width:18px;height:18px;"></i>
              </div>
            </div>
            <h3 style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:4px;">${escapeHtml(p.title)}</h3>
            ${p.subtitle ? `<p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px;">${escapeHtml(p.subtitle)}</p>` : ''}
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:12px;border-top:1px solid var(--border);">
            <span style="font-size:0.8rem;color:var(--text-muted);font-weight:500;">
              ${stepCount} ${stepCount === 1 ? 'step' : 'steps'}
            </span>
            <i data-lucide="chevron-right" style="width:16px;height:16px;color:var(--text-muted);"></i>
          </div>
        </div>
      `;
    }).join('');

    refreshIcons();
  }

  // Setup filter chip click listeners
  chipsBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    // Toggle active state
    chipsBar.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    activeCategory = chip.dataset.category;
    renderGrid();
  });

  // Setup search input listener
  searchInput.addEventListener('input', renderGrid);

  // Setup card click delegation
  gridContainer.addEventListener('click', (e) => {
    const card = e.target.closest('[data-proc-id]');
    if (!card) return;
    const procId = card.dataset.procId;
    const procedure = allProcedures.find(p => p.id === procId);
    if (procedure) {
      AppState.navigateTo('stepDetail', procedure);
    }
  });

  renderGrid();
  refreshIcons();
}
