/* ============================================================
   app.js – Main state controller, routing, and initialization
   ============================================================ */

const DEFAULTS = {
  procedureCounts: {
    'Arterial Line': 0,
    'Arterial Blood Gas': 0,
    'Central Venous Line': 0,
    'Lumbar Puncture': 0,
    'Nasogastric Tube': 0,
    'Paracentesis': 0,
    'Peripheral IV': 0,
    'Phlebotomy': 0,
    'Central Line Removal': 0
  },
  preferences: {
    enabledProcedures: {
      'Arterial Line': true,
      'Arterial Blood Gas': true,
      'Central Venous Line': true,
      'Lumbar Puncture': true,
      'Nasogastric Tube': true,
      'Paracentesis': true,
      'Peripheral IV': true,
      'Phlebotomy': true,
      'Central Line Removal': true
    },
    kitSelections: {
      'Arterial Line': 'No Kit',
      'Central Venous Line': 'No Kit',
      'Paracentesis': 'No Kit',
      'Peripheral IV': 'No Kit'
    },
    thresholds: {
      'Arterial Line': 5,
      'Arterial Blood Gas': 5,
      'Central Venous Line': 7,
      'Lumbar Puncture': 3,
      'Nasogastric Tube': 3,
      'Paracentesis': 3,
      'Peripheral IV': 5,
      'Phlebotomy': 7,
      'Central Line Removal': 3
    },
    // 'system' = follow OS preference; 'light' / 'dark' = explicit override
    theme: 'system',
    useRateFormat: false
  }
};

const AppState = {
  currentTab: 'steps', // Default active tab
  currentView: null,   // Current sub-view (e.g. 'stepDetail' or 'supplyDetail')
  viewData: null,      // Data passed to the current sub-view
  navigationStack: [], // To support backtracking

  // State data loaded from localStorage or using defaults
  procedureCounts: (() => {
    try {
      const stored = JSON.parse(localStorage.getItem('procedureCounts'));
      return stored ? { ...DEFAULTS.procedureCounts, ...stored } : { ...DEFAULTS.procedureCounts };
    } catch (e) {
      console.error('Error parsing procedureCounts from localStorage:', e);
      return { ...DEFAULTS.procedureCounts };
    }
  })(),
  procedureLogs: (() => {
    try {
      return JSON.parse(localStorage.getItem('procedureLogs')) || [];
    } catch (e) {
      console.error('Error parsing procedureLogs from localStorage:', e);
      return [];
    }
  })(),
  preferences: (() => {
    try {
      const stored = JSON.parse(localStorage.getItem('preferences')) || {};
      return {
        enabledProcedures: { ...DEFAULTS.preferences.enabledProcedures, ...(stored.enabledProcedures || {}) },
        kitSelections: { ...DEFAULTS.preferences.kitSelections, ...(stored.kitSelections || {}) },
        thresholds: { ...DEFAULTS.preferences.thresholds, ...(stored.thresholds || {}) },
        useRateFormat: stored.useRateFormat !== undefined ? stored.useRateFormat : DEFAULTS.preferences.useRateFormat,
        theme: (stored.theme === 'light' || stored.theme === 'dark') ? stored.theme : DEFAULTS.preferences.theme
      };
    } catch (e) {
      console.error('Error parsing preferences from localStorage:', e);
      return {
        enabledProcedures: { ...DEFAULTS.preferences.enabledProcedures },
        kitSelections: { ...DEFAULTS.preferences.kitSelections },
        thresholds: { ...DEFAULTS.preferences.thresholds },
        useRateFormat: DEFAULTS.preferences.useRateFormat,
        theme: DEFAULTS.preferences.theme
      };
    }
  })(),

  // Persists the current state to localStorage
  save() {
    localStorage.setItem('procedureCounts', JSON.stringify(this.procedureCounts));
    localStorage.setItem('procedureLogs', JSON.stringify(this.procedureLogs));
    localStorage.setItem('preferences', JSON.stringify(this.preferences));
  },

  // Reset helpers
  resetPreferencesSection(section) {
    if (section === 'procedures') {
      this.preferences.enabledProcedures = { ...DEFAULTS.preferences.enabledProcedures };
    } else if (section === 'kits') {
      this.preferences.kitSelections = { ...DEFAULTS.preferences.kitSelections };
    } else if (section === 'thresholds') {
      this.preferences.thresholds = { ...DEFAULTS.preferences.thresholds };
    } else if (section === 'other') {
      this.preferences.useRateFormat = DEFAULTS.preferences.useRateFormat;
      this.preferences.theme = DEFAULTS.preferences.theme;
      applyTheme();
    }
    this.save();
  }
};

// ── Routing & Navigation ──────────────────────────────────────

/**
 * Switch the active tab. Clears subviews and navigation history.
 */
function switchTab(tabName) {
  AppState.currentTab = tabName;
  AppState.currentView = null;
  AppState.viewData = null;
  AppState.navigationStack = [];

  // Update tab bar active UI
  document.querySelectorAll('.tab-bar .tab-item').forEach(button => {
    if (button.dataset.tab === tabName) {
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    }
  });

  // Close dropdown menu if open
  closeMenu();

  // Render the selected tab's page content
  switch (tabName) {
    case 'supplies':
      if (typeof renderSuppliesPage === 'function') renderSuppliesPage();
      break;
    case 'steps':
      if (typeof renderStepsPage === 'function') renderStepsPage();
      break;
    case 'portfolio':
      if (typeof renderPortfolioPage === 'function') renderPortfolioPage();
      break;
    case 'references':
      if (typeof renderReferencesPage === 'function') renderReferencesPage();
      break;
    default:
      console.error(`Unknown tab: ${tabName}`);
  }
}

/**
 * Navigate to a sub-view within the current tab (pushes to backstack).
 */
function navigateTo(viewName, data = null) {
  // Push current view state to history stack
  AppState.navigationStack.push({
    view: AppState.currentView,
    data: AppState.viewData
  });

  AppState.currentView = viewName;
  AppState.viewData = data;

  renderSubView(viewName, data);
}

/**
 * Go back to the previous view from the history stack.
 */
function navigateBack() {
  if (AppState.navigationStack.length === 0) {
    // If no history, default back to the tab root
    switchTab(AppState.currentTab);
    return;
  }

  const prev = AppState.navigationStack.pop();
  AppState.currentView = prev.view;
  AppState.viewData = prev.data;

  if (AppState.currentView === null) {
    switchTab(AppState.currentTab);
  } else {
    renderSubView(AppState.currentView, AppState.viewData);
  }
}

/**
 * Renders a specific sub-view.
 */
function renderSubView(viewName, data) {
  closeMenu();
  switch (viewName) {
    case 'supplyDetail':
      if (typeof renderSupplyDetail === 'function') renderSupplyDetail(data);
      break;
    case 'stepDetail':
      if (typeof renderStepDetail === 'function') renderStepDetail(data);
      break;
    case 'tipsAndTricks':
      if (typeof renderTipsPage === 'function') renderTipsPage(data);
      break;
    case 'about':
      if (typeof renderAboutPage === 'function') renderAboutPage();
      break;
    case 'preferences':
      if (typeof renderPreferencesPage === 'function') renderPreferencesPage();
      break;
    default:
      console.error(`Unknown subview: ${viewName}`);
  }
}

// ── Dropdown Menu ─────────────────────────────────────────────

function toggleMenu() {
  const menu = document.getElementById('settings-dropdown');
  const btn = document.getElementById('menu-toggle-btn');
  if (!menu || !btn) {
    console.error('toggleMenu: menu or button element not found!', { menu, btn });
    return;
  }
  const isHidden = menu.hasAttribute('hidden');
  console.log('toggleMenu called. isHidden =', isHidden);

  if (isHidden) {
    menu.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    console.log('toggleMenu: removed hidden attribute from settings-dropdown');
  } else {
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    console.log('toggleMenu: added hidden attribute to settings-dropdown');
  }
}

function closeMenu() {
  const menu = document.getElementById('settings-dropdown');
  const btn = document.getElementById('menu-toggle-btn');
  console.log('closeMenu called');
  if (menu) menu.setAttribute('hidden', '');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// ── Modal Overlays ────────────────────────────────────────────

function showModal(title, contentHtml) {
  const overlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalContainer = document.getElementById('modal-container');

  console.log('showModal called with title:', title);

  // Clear any per-call modifier class left by a previous opener so each
  // modal starts at its CSS-default size. Callers that need a taller modal
  // can add the 'modal-tall' class (defined in index.css) AFTER showModal
  // returns.
  if (modalContainer) modalContainer.classList.remove('modal-tall');

  modalTitle.textContent = title;
  modalBody.innerHTML = contentHtml;

  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
  refreshIcons();

  console.log('showModal: overlay hidden attribute removed. Immediate stats: ' + JSON.stringify({
    overlayHidden: overlay.hasAttribute('hidden'),
    overlayStyleDisplay: window.getComputedStyle(overlay).display,
    overlayStyleOpacity: window.getComputedStyle(overlay).opacity,
    overlayStyleZIndex: window.getComputedStyle(overlay).zIndex,
    modalWidth: document.getElementById('modal-container').offsetWidth,
    modalHeight: document.getElementById('modal-container').offsetHeight
  }));

  setTimeout(() => {
    console.log('showModal (after 200ms) stats: ' + JSON.stringify({
      overlayHidden: overlay.hasAttribute('hidden'),
      overlayStyleDisplay: window.getComputedStyle(overlay).display,
      overlayStyleOpacity: window.getComputedStyle(overlay).opacity,
      overlayStyleZIndex: window.getComputedStyle(overlay).zIndex,
      modalWidth: document.getElementById('modal-container').offsetWidth,
      modalHeight: document.getElementById('modal-container').offsetHeight,
      overlayClientWidth: overlay.clientWidth,
      overlayClientHeight: overlay.clientHeight
    }));
  }, 200);
}

function hideModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = ''; // Unlock scrolling
}

// Expose navigation methods on AppState
AppState.navigateTo = navigateTo;
AppState.navigateBack = navigateBack;
AppState.switchTab = switchTab;

// ── Theme ─────────────────────────────────────────────────────

/**
 * Apply the current theme preference to <html>.
 *   'system' → remove the data-theme attribute (use prefers-color-scheme)
 *   'light' / 'dark' → force that theme via data-theme attribute
 */
function applyTheme() {
  const t = AppState.preferences.theme;
  if (t === 'light' || t === 'dark') {
    document.documentElement.setAttribute('data-theme', t);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}
AppState.applyTheme = applyTheme;

// Apply immediately so the initial paint matches the saved preference
// (before DOMContentLoaded fires). Safe: <html> exists at script-eval time.
applyTheme();

// ── App Initialization ────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Tab Bar Click Handlers
  document.getElementById('tab-bar').addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-tab]');
    if (tabBtn) {
      switchTab(tabBtn.dataset.tab);
    }
  });

  // Settings Menu Toggle
  document.getElementById('menu-toggle-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close Settings Menu when clicking elsewhere
  window.addEventListener('click', (e) => {
    const clickedInsideMenu = e.target.closest('#settings-dropdown');
    const clickedMenuBtn = e.target.closest('#menu-toggle-btn');
    console.log('window click event:', { target: e.target, clickedInsideMenu, clickedMenuBtn });
    if (!clickedInsideMenu && !clickedMenuBtn) {
      closeMenu();
    }
  });

  // Settings Menu Item Actions
  document.getElementById('menu-about-btn').addEventListener('click', (e) => {
    console.log('menu-about-btn clicked', e);
    closeMenu();
    navigateTo('about');
  });

  document.getElementById('menu-preferences-btn').addEventListener('click', (e) => {
    console.log('menu-preferences-btn clicked', e);
    closeMenu();
    navigateTo('preferences');
  });

  // Modal Close Button
  document.getElementById('modal-close-btn').addEventListener('click', hideModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) {
      hideModal();
    }
  });

  // Load initial view
  switchTab(AppState.currentTab);

  // Initialize Lucide Icons globally
  refreshIcons();
});
