/* ============================================================
   common.js – Shared utilities for the Proceduralist web app
   ============================================================ */

// ── Incidence Rate Formatter ─────────────────────────────────
// Port of Swift IncidenceRateFormatter
const RateFormatter = {

  /**
   * Extract the first numeric value from a string like "1%", "0.02%", "19.7%"
   */
  _extractNumeric(str) {
    const m = str.match(/(\d+\.?\d*)/);
    return m ? parseFloat(m[1]) : null;
  },

  /**
   * Calculate (numerator-string, denominator-int) for "X per Y" format.
   * Denominator starts at 100, multiplied by 10 until numerator >= 1.
   */
  _rateComponents(decimal) {
    let denominator = 100;
    let numerator = decimal * denominator;

    while (numerator < 1.0 && denominator < 1000000000) {
      denominator *= 10;
      numerator = decimal * denominator;
    }

    let formatted;
    if (numerator >= 10) {
      formatted = Math.round(numerator).toString();
    } else if (numerator >= 1) {
      const s = numerator.toFixed(1);
      formatted = s.endsWith('.0') ? s.slice(0, -2) : s;
    } else {
      formatted = numerator.toFixed(2);
    }

    return { numerator: formatted, denominator };
  },

  /**
   * Convert percentage string to "X per Y" format.
   * Only converts rates < 1% (but > 0%) when useRateFormat is true.
   */
  formatRate(percentageString, useRateFormat) {
    if (!useRateFormat) return percentageString;

    const cleaned = percentageString.trim();
    const val = this._extractNumeric(cleaned);
    if (val === null) return percentageString;
    if (val === 0) return percentageString;
    if (val >= 1.0) return percentageString;

    const decimal = val / 100;
    const { numerator, denominator } = this._rateComponents(decimal);
    return `${numerator} per ${denominator.toLocaleString()}`;
  },

  /**
   * Force-convert any percentage to "X per Y" format (used for range endpoints).
   * For 0%, returns "0".
   */
  formatRangeValue(percentageString) {
    const cleaned = percentageString.trim();
    const val = this._extractNumeric(cleaned);
    if (val === null) return percentageString;
    if (val === 0) return '0';

    const decimal = val / 100;
    const { numerator, denominator } = this._rateComponents(decimal);
    return `${numerator} per ${denominator.toLocaleString()}`;
  },

  /**
   * Get formatted mean and range for a given incidence rate object.
   * @param {object} incidenceRate – { mean, range?, timePeriod? }
   * @param {boolean} useRateFormat
   * @returns {{ formattedMean: string, formattedRange: string|null }}
   */
  getFormattedRate(incidenceRate, useRateFormat) {
    if (!incidenceRate) return { formattedMean: '', formattedRange: null };

    const formattedMean = this.formatRate(incidenceRate.mean, useRateFormat);

    let formattedRange = incidenceRate.range || null;

    if (formattedRange && useRateFormat) {
      const meanVal = this._extractNumeric(incidenceRate.mean);
      // Only convert range when mean is between 0 and 1% (exclusive)
      if (meanVal !== null && meanVal > 0 && meanVal < 1.0) {
        // Split on dash or en-dash
        const parts = formattedRange.split(/\s*[–\-]\s*/);
        if (parts.length === 2) {
          const lower = this.formatRangeValue(parts[0]);
          const upper = this.formatRangeValue(parts[1]);
          formattedRange = `${lower} – ${upper}`;
        }
      }
    }

    return { formattedMean, formattedRange };
  }
};

// ── Search Filter Helper ─────────────────────────────────────

/**
 * Filter an array of items by searchText across given fields.
 * @param {Array} items
 * @param {string} searchText
 * @param {...string} fields – property names to check
 * @returns {Array}
 */
function filterBySearch(items, searchText, ...fields) {
  if (!searchText || !searchText.trim()) return items;
  const lower = searchText.trim().toLowerCase();
  return items.filter(item =>
    fields.some(f => {
      const val = item[f];
      return val && String(val).toLowerCase().includes(lower);
    })
  );
}

// ── DOM Helpers ──────────────────────────────────────────────

/**
 * Create an element with optional class and innerHTML.
 */
function createElement(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML !== undefined && innerHTML !== null) el.innerHTML = innerHTML;
  return el;
}

/**
 * Create a Lucide icon element.
 */
function createIcon(name, size) {
  const i = document.createElement('i');
  i.setAttribute('data-lucide', name);
  if (size) {
    i.style.width = size + 'px';
    i.style.height = size + 'px';
  }
  return i;
}

/**
 * Refresh Lucide icons after DOM mutation.
 */
function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ── Date Formatting ──────────────────────────────────────────

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
}

// ── UUID Generator ───────────────────────────────────────────

function generateId() {
  return crypto.randomUUID();
}

// ── Category Helpers ─────────────────────────────────────────

const CATEGORY_META = {
  vascularAccess: {
    label: 'Vascular Access',
    color: '#ef4444',
    icon: 'droplet',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.3)'
  },
  diagnosticSampling: {
    label: 'Diagnostic Sampling',
    color: '#3b82f6',
    icon: 'test-tubes',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.3)'
  },
  fluidDrainage: {
    label: 'Fluid Drainage',
    color: '#8b5cf6',
    icon: 'waves',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.3)'
  },
  airwayAndTubes: {
    label: 'Airway & Tubes',
    color: '#22c55e',
    icon: 'wind',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.3)'
  }
};

/**
 * Parse simple bold markdown: **text** → <strong>text</strong>
 */
function parseBoldMarkdown(text) {
  if (!text) return '';
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

/**
 * Escape HTML special characters.
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Fullscreen Image Viewer with Zoom & Pan ──────────────────

/**
 * Open a fullscreen interactive image preview overlay with zoom and drag support.
 * @param {string} src - Image source URL
 * @param {string} alt - Alternative description
 */
function openFullscreenImage(src, alt) {
  if (document.getElementById('fullscreen-image-viewer')) return;

  const overlay = document.createElement('div');
  overlay.id = 'fullscreen-image-viewer';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  overlay.style.zIndex = '999999';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.overflow = 'hidden';
  overlay.style.userSelect = 'none';
  overlay.style.touchAction = 'none';
  overlay.style.pointerEvents = 'auto';

  // Floating Close Button
  const closeBtn = document.createElement('button');
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '20px';
  closeBtn.style.right = '20px';
  closeBtn.style.width = '44px';
  closeBtn.style.height = '44px';
  closeBtn.style.borderRadius = '50%';
  closeBtn.style.border = 'none';
  closeBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
  closeBtn.style.color = '#ffffff';
  closeBtn.style.display = 'flex';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.zIndex = '1000000';
  closeBtn.setAttribute('aria-label', 'Close fullscreen image');
  closeBtn.innerHTML = '<i data-lucide="x" style="width:24px;height:24px;"></i>';

  // Main Image
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || 'Fullscreen preview';
  img.style.maxWidth = '100%';
  img.style.maxHeight = '100%';
  img.style.objectFit = 'contain';
  img.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
  img.style.transformOrigin = 'center center';
  img.style.cursor = 'zoom-in';
  img.style.pointerEvents = 'auto';

  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // Refresh Lucide close icon safely
  try {
    if (typeof refreshIcons === 'function') {
      refreshIcons();
    }
  } catch (e) {
    console.error('Error refreshing icons in fullscreen viewer', e);
  }

  // Zooming, Panning, and Dragging State
  let scale = 1;
  let isZoomed = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;

  // Touch gesture state for pinch-to-zoom
  let initialDistance = 0;
  let initialScale = 1;

  function updateTransform() {
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    isZoomed = false;
    img.style.cursor = 'zoom-in';
    updateTransform();
  }

  function toggleZoom(clientX, clientY) {
    if (isZoomed) {
      resetZoom();
    } else {
      scale = 2.5;
      isZoomed = true;
      img.style.cursor = 'grab';

      // Center zoom roughly around touch/tap coordinates relative to screen center
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      translateX = (screenCenterX - clientX) * 1.5;
      translateY = (screenCenterY - clientY) * 1.5;

      updateTransform();
    }
  }

  // Fade out and close overlay
  const close = () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 200);
  };

  closeBtn.addEventListener('click', close);

  // Close when tapping the empty background backdrop
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      close();
    }
  });

  // Handle double-tap/double-click to zoom
  let lastTap = 0;
  img.addEventListener('click', (e) => {
    const now = Date.now();
    const timesince = now - lastTap;
    if (timesince < 300 && timesince > 0) {
      toggleZoom(e.clientX, e.clientY);
    }
    lastTap = now;
  });

  // Desktop Mouse Drag / Panning
  img.addEventListener('mousedown', (e) => {
    if (!isZoomed) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    img.style.transition = 'none';
    img.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      img.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
      img.style.cursor = 'grab';
    }
  });

  // Desktop Scroll Wheel Zoom
  overlay.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = 0.15;
    const oldScale = scale;
    
    if (e.deltaY < 0) {
      scale = Math.min(scale + zoomFactor, 5);
    } else {
      scale = Math.max(scale - zoomFactor, 1);
    }
    
    isZoomed = scale > 1;
    img.style.cursor = isZoomed ? 'grab' : 'zoom-in';

    // Keep center stable
    if (!isZoomed) {
      translateX = 0;
      translateY = 0;
    } else {
      translateX = translateX * (scale / oldScale);
      translateY = translateY * (scale / oldScale);
    }
    updateTransform();
  }, { passive: false });

  // Mobile Touch Gestures (Panning & Pinch-to-Zoom)
  img.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      if (!isZoomed) return;
      isDragging = true;
      startX = e.touches[0].clientX - translateX;
      startY = e.touches[0].clientY - translateY;
      img.style.transition = 'none';
      img.style.cursor = 'grabbing';
    } else if (e.touches.length === 2) {
      e.preventDefault(); // Prevent browser from interfering with pinch
      isDragging = false;
      initialDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialScale = scale || 1;
      img.style.transition = 'none';
    }
  });

  img.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault(); // Prevent scrolling while panning
      translateX = e.touches[0].clientX - startX;
      translateY = e.touches[0].clientY - startY;
      updateTransform();
    } else if (e.touches.length === 2) {
      e.preventDefault(); // Prevent browser zoom/scroll
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (initialDistance > 0) {
        scale = Math.min(Math.max(initialScale * (distance / initialDistance), 1), 5);
        if (isNaN(scale)) scale = 1;
        isZoomed = scale > 1;
        img.style.cursor = isZoomed ? 'grab' : 'zoom-in';
        updateTransform();
      }
    }
  });

  const endTouch = (e) => {
    if (isDragging) {
      isDragging = false;
      img.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
      img.style.cursor = isZoomed ? 'grab' : 'zoom-in';
    }
    if (!e || e.touches.length < 2) {
      initialDistance = 0;
    }
  };

  img.addEventListener('touchend', endTouch);
  img.addEventListener('touchcancel', endTouch);
}

// Global Image Click Listener to open Fullscreen Viewer
document.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'IMG') {
    const src = e.target.getAttribute('src') || e.target.src;
    console.log('Global image click detected. Src:', src);
    if (src && (src.includes('images/') || src.includes('/images/'))) {
      // Exclude image if inside the viewer overlay itself to avoid infinite triggers
      if (e.target.closest('#fullscreen-image-viewer')) {
        console.log('Image click was inside fullscreen-image-viewer, ignoring.');
        return;
      }
      console.log('Valid procedure illustration clicked. Opening fullscreen viewer...');
      openFullscreenImage(e.target.src, e.target.alt);
    } else {
      console.log('Image clicked is not a clinical procedure asset, ignoring.');
    }
  }
});

