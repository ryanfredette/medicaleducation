/* ============================================================
   step-detail.js – Step-by-step detail view with accordions
   ============================================================ */

/**
 * Render the step detail page for a specific procedure.
 */
function renderStepDetail(proc) {
  const container = document.getElementById('app-content');

  // Extract sections
  const indications = proc.clinicalInfo.find(info => info.type === 'indications')?.items || [];
  const contraindications = proc.clinicalInfo.find(info => info.type === 'contraindications')?.items || [];
  const complications = proc.clinicalInfo.find(info => info.type === 'complications')?.items || [];
  
  // Tips and Tricks
  const tips = proc.tipsAndTricks || [];

  // Group contraindications
  const absoluteContra = contraindications.filter(c => c.severity === 'absolute');
  const relativeContra = contraindications.filter(c => c.severity === 'relative');

  // Render main layout shell
  container.innerHTML = `
    <div class="page-container fade-in" id="step-detail-container" style="padding-bottom: 40px;">
      <!-- Back Button -->
      <button class="btn-icon" id="step-detail-back" style="margin-bottom: 16px;">
        <i data-lucide="arrow-left" style="width:20px;height:20px;"></i>
        <span>Procedures</span>
      </button>

      <!-- Title & Header -->
      <h2 style="font-size:1.6rem;font-weight:800;color:var(--text);margin-bottom:4px;">${escapeHtml(proc.title)}</h2>
      ${proc.subtitle ? `<p style="font-size:0.95rem;color:var(--text-secondary);margin-bottom:20px;">${escapeHtml(proc.subtitle)}</p>` : ''}

      <!-- Quick Action Buttons -->
      ${tips.length > 0 ? `
      <div style="display:flex;gap:10px;margin-bottom:24px;">
        <button class="btn-secondary" id="btn-tips-tricks" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;">
          <i data-lucide="lightbulb" style="width:16px;height:16px;color:var(--sage-dark);"></i>
          <span>Tips & Tricks</span>
        </button>
      </div>
      ` : ''}

      <!-- ================= CLINICAL INFO ================= -->
      <section style="margin-bottom:32px;">
        <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:12px;color:var(--text);">Clinical Information</h3>
        
        <!-- Indications -->
        ${indications.length > 0 ? `
          <div class="clinical-card indications-card" style="background:rgba(34,197,94,0.06);border:1.5px solid rgba(34,197,94,0.25);border-radius:var(--radius);padding:16px;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;color:#15803d;font-weight:700;font-size:0.95rem;">
              <i data-lucide="check-circle" style="width:18px;height:18px;"></i>
              <span>Indications</span>
            </div>
            <ul style="padding-left:20px;color:var(--text-secondary);font-size:0.9rem;line-height:1.5;">
              ${indications.map(ind => `<li style="margin-bottom:4px;">${escapeHtml(ind)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Contraindications -->
        ${contraindications.length > 0 ? `
          <div class="clinical-card contraindications-card" style="background:rgba(239,68,68,0.06);border:1.5px solid rgba(239,68,68,0.25);border-radius:var(--radius);padding:16px;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;color:#b91c1c;font-weight:700;font-size:0.95rem;">
              <i data-lucide="alert-octagon" style="width:18px;height:18px;"></i>
              <span>Contraindications</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${absoluteContra.map(c => _renderContraItem(c, 'absolute')).join('')}
              ${relativeContra.map(c => _renderContraItem(c, 'relative')).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Complications -->
        ${complications.length > 0 ? `
          <div class="clinical-card complications-card" style="background:rgba(234,179,8,0.06);border:1.5px solid rgba(234,179,8,0.25);border-radius:var(--radius);padding:16px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;color:#a16207;font-weight:700;font-size:0.95rem;">
              <i data-lucide="alert-triangle" style="width:18px;height:18px;"></i>
              <span>Complications & Risks</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;" id="complications-list">
              ${complications.map((c, i) => _renderComplicationItem(c, i)).join('')}
            </div>
          </div>
        ` : ''}
      </section>

      <!-- ================= PROCEDURE STEPS ================= -->
      <section>
        <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:12px;color:var(--text);">Step-by-Step Procedure</h3>
        <div class="accordion" id="steps-accordion">
          ${proc.steps.map((step, idx) => _renderStepAccordion(step, idx)).join('')}
        </div>
      </section>
    </div>
  `;

  // Back button
  document.getElementById('step-detail-back').addEventListener('click', () => {
    AppState.navigateBack();
  });


  // Tips and Tricks — navigate to a full page
  const tipsBtn = document.getElementById('btn-tips-tricks');
  if (tipsBtn) {
    tipsBtn.addEventListener('click', () => {
      AppState.navigateTo('tipsAndTricks', { procedureTitle: proc.title, tips });
    });
  }

  // Get local detail container
  const detailContainer = document.getElementById('step-detail-container');

  // Accordion Expand/Collapse + Contraindication Toggle Logic on step-detail-container
  detailContainer.addEventListener('click', (e) => {
    // 1. Accordions
    const header = e.target.closest('.accordion-header');
    if (header) {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const chevron = header.querySelector('.chevron-icon');

      const isOpen = item.classList.contains('open');

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = '0px';
        chevron.style.transform = 'rotate(0deg)';
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        chevron.style.transform = 'rotate(180deg)';
      }
      return;
    }

    // 2. Contraindications
    const trigger = e.target.closest('[data-contra-toggle]');
    if (trigger) {
      const expDiv = trigger.nextElementSibling;
      if (expDiv && expDiv.classList.contains('contra-explanation')) {
        const isHidden = expDiv.style.display === 'none' || !expDiv.style.display;
        expDiv.style.display = isHidden ? 'block' : 'none';
        const chevron = trigger.querySelector('.contra-chevron');
        if (chevron) {
          chevron.style.transform = isHidden ? 'rotate(90deg)' : 'rotate(0deg)';
        }
      }
      return;
    }
  });

  // Complication Info Dialog Logic
  const complicationsContainer = document.getElementById('complications-list');
  if (complicationsContainer) {
    complicationsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-complication-index]');
      if (!btn) return;
      const idx = parseInt(btn.dataset.complicationIndex, 10);
      const comp = complications[idx];
      if (comp) {
        _showComplicationDetail(comp);
      }
    });
  }

  refreshIcons();
}

// ── Private Render Helpers ────────────────────────────────────

function _renderContraItem(c, severity) {
  const isAbsolute = severity === 'absolute';
  const badgeColor = isAbsolute ? '#dc2626' : '#ea580c';
  const badgeBg = isAbsolute ? 'rgba(220,38,38,0.1)' : 'rgba(234,88,12,0.1)';
  const label = isAbsolute ? 'Absolute' : 'Relative';
  const hasExplanation = !!c.explanation;

  const content = typeof c === 'string' ? c : c.text;
  const explanation = typeof c === 'string' ? '' : (c.explanation || '');

  return `
    <div style="border-bottom:1px solid rgba(0,0,0,0.05);padding-bottom:8px;margin-bottom:4px;last-child:{border:0;padding:0;}">
      <div ${hasExplanation ? `data-contra-toggle="true"` : ''} 
           style="display:flex;align-items:center;justify-content:space-between;gap:8px;${hasExplanation ? 'cursor:pointer;' : ''}">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:${badgeColor};background:${badgeBg};padding:2px 6px;border-radius:4px;letter-spacing:0.02em;">
            ${label}
          </span>
          <span style="font-weight:600;font-size:0.9rem;color:var(--text);">${escapeHtml(content)}</span>
        </div>
        ${hasExplanation ? `
          <i data-lucide="chevron-right" class="contra-chevron" style="width:14px;height:14px;color:var(--text-muted);transition:transform 0.2s;"></i>
        ` : ''}
      </div>
      ${hasExplanation ? `
        <div class="contra-explanation" style="display:none;margin-top:6px;padding:8px 10px;background:rgba(0,0,0,0.02);border-radius:8px;font-size:0.82rem;color:var(--text-secondary);line-height:1.4;">
          ${escapeHtml(explanation)}
        </div>
      ` : ''}
    </div>
  `;
}

function _renderComplicationItem(c, index) {
  const name = typeof c === 'string' ? c : c.name;
  const hasDetails = typeof c !== 'string' && (c.mechanism || c.treatment || (c.references && c.references.length > 0) || c.incidenceRate);

  // The incidence-rate badge is intentionally NOT rendered inline. The rate
  // is only shown inside the detail modal opened by the info icon.
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(0,0,0,0.03);">
      <span style="font-weight:600;font-size:0.9rem;color:var(--text);">${escapeHtml(name)}</span>
      ${hasDetails ? `
        <button class="btn-icon" data-complication-index="${index}" style="padding:4px;margin-right:-4px;color:var(--text-muted);" aria-label="Complication details">
          <i data-lucide="info" style="width:16px;height:16px;"></i>
        </button>
      ` : ''}
    </div>
  `;
}

function _renderStepAccordion(step, idx) {
  const bulletItems = step.bullets || [];
  const hasBullets = bulletItems.length > 0;
  const mediaItems = step.images || [];
  const hasMedia = mediaItems.length > 0;

  let bodyContent = `<p style="font-size:0.93rem;line-height:1.55;color:var(--text-secondary);margin-bottom:12px;">${parseBoldMarkdown(escapeHtml(step.body))}</p>`;
  
  if (hasBullets) {
    bodyContent += `
      <ul style="padding-left:20px;font-size:0.9rem;line-height:1.5;color:var(--text-secondary);margin-bottom:12px;display:flex;flex-direction:column;gap:4px;">
        ${bulletItems.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}
      </ul>
    `;
  }

  if (hasMedia) {
    bodyContent += `
      <div class="step-media-carousel" style="display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin-bottom:12px;border-radius:var(--radius-sm);position:relative;">
        ${mediaItems.map((media, i) => _renderMediaCard(media, i, mediaItems.length)).join('')}
      </div>
    `;
  }

  if (step.callout) {
    bodyContent += `
      <div class="callout-box" style="background:rgba(234,179,8,0.08);border-left:4px solid var(--orange);padding:12px 16px;border-radius:0 var(--radius-sm) var(--radius-sm) 0;margin-top:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;font-size:0.85rem;line-height:1.45;color:#854d0e;font-weight:550;">
          <i data-lucide="alert-circle" style="width:16px;height:16px;flex-shrink:0;margin-top:2px;"></i>
          <span>${escapeHtml(step.callout)}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="accordion-item" style="border:1.5px solid var(--border);border-radius:var(--radius);margin-bottom:12px;overflow:hidden;background:var(--bg-card);transition:var(--transition);">
      <button class="accordion-header" style="width:100%;background:none;border:none;text-align:left;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;outline:none;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="width:28px;height:28px;border-radius:50%;background:var(--sage-light);color:var(--sage-dark);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;">
            ${idx + 1}
          </span>
          <span style="font-weight:700;font-size:0.98rem;color:var(--text);">${escapeHtml(step.header)}</span>
        </div>
        <i data-lucide="chevron-down" class="chevron-icon" style="width:18px;height:18px;color:var(--text-muted);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"></i>
      </button>
      <div class="accordion-body" style="max-height:0;overflow:hidden;transition:max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
        <div style="padding:0 20px 20px 20px;border-top:1px solid rgba(0,0,0,0.02);">
          ${bodyContent}
        </div>
      </div>
    </div>
  `;
}

function _renderMediaCard(media, index, totalCount) {
  const isVideo = !!media.isVideo;
  const name = isVideo ? media.videoName : media.imageName;
  const icon = isVideo ? 'play-circle' : 'image';
  const typeLabel = isVideo ? 'Video Reference' : 'Illustration';

  const badgeHtml = totalCount > 1 
    ? `<div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.6);color:#fff;font-size:0.65rem;font-weight:700;padding:4px 8px;border-radius:12px;z-index:10;backdrop-filter:blur(4px); letter-spacing: 0.5px;">${index + 1} / ${totalCount}</div>`
    : '';

  const mediaContent = isVideo
    ? `<video src="Videos/${encodeURIComponent(name)}.mp4" poster="Videos/thumbnails/${encodeURIComponent(name)}.png" controls preload="metadata" style="width:100%;height:180px;object-fit:cover;background:#000;display:block;"></video>`
    : `<img src="images/${encodeURIComponent(name)}.jpg" onclick="openFullscreenImage(this.src, this.alt)" style="width:100%;height:180px;object-fit:cover;cursor:pointer;display:block;" alt="${escapeHtml(name)}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23888\' stroke-width=\'2\'><rect x=\'3\' y=\'3\' width=\'18\' height=\'18\' rx=\'2\' ry=\'2\'/><circle cx=\'8.5\' cy=\'8.5\' r=\'1.5\'/><polyline points=\'21 15 16 10 5 21\'/></svg>';" />`;

  return `
    <div class="card media-card" style="width:100%;flex:0 0 100%;scroll-snap-align:center;background:var(--bg-card);border:1px solid rgba(158,191,138,0.3);border-radius:var(--radius-sm);display:flex;flex-direction:column;overflow:hidden;position:relative;">
      ${badgeHtml}
      ${mediaContent}
      ${media.caption ? `<div style="padding:10px 12px;font-size:0.8rem;color:var(--text-secondary);line-height:1.4;background:rgba(158,191,138,0.06);border-top:1px solid rgba(158,191,138,0.15);">${escapeHtml(media.caption)}</div>` : ''}
    </div>
  `;
}

// ── Modals Trigger Logic ──────────────────────────────────────

function _showComplicationDetail(comp) {
  const rateInfo = RateFormatter.getFormattedRate(comp.incidenceRate, AppState.preferences.useRateFormat);
  const rangeInfo = RateFormatter.getFormattedRate({ mean: comp.incidenceRate?.mean, range: comp.incidenceRate?.range }, AppState.preferences.useRateFormat);
  
  let refsHtml = '';
  if (comp.references && comp.references.length > 0) {
    refsHtml = `
      <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:12px;">
        <h4 style="font-size:0.8rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;">References</h4>
        ${comp.references.map(ref => `
          <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.45;margin-bottom:6px;">
            ${escapeHtml(ref.title)}
            ${ref.urlString ? `<br><a href="${escapeHtml(ref.urlString)}" target="_blank" style="color:var(--sage-dark);text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:3px;margin-top:2px;">
              View Article <i data-lucide="external-link" style="width:12px;height:12px;"></i>
            </a>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // The taller-popup effect comes from setting min-height directly on the
  // #modal-container AFTER showModal (.modal-body has overflow-y:auto, so a
  // min-height on a child won't propagate up to the container). Keep the
  // inner gap; height is controlled below.
  const html = `
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div>
        <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;display:block;margin-bottom:2px;">Incidence Rate</span>
        <div style="font-size:1.1rem;font-weight:700;color:var(--text);">
          ${rateInfo.formattedMean}
        </div>
        ${comp.incidenceRate?.range ? `
          <div style="font-size:0.9rem;font-weight:500;color:var(--text-secondary);margin-top:4px;">
            Range: ${rangeInfo.formattedRange}
          </div>
        ` : ''}
      </div>

      ${comp.mechanism ? `
        <div>
          <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;display:block;margin-bottom:2px;">Mechanism</span>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.45;">${escapeHtml(comp.mechanism)}</p>
        </div>
      ` : ''}

      ${comp.treatment ? `
        <div>
          <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;display:block;margin-bottom:2px;">Management & Treatment</span>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.45;">${escapeHtml(comp.treatment)}</p>
        </div>
      ` : ''}

      ${refsHtml}
    </div>
  `;

  showModal(comp.name, html);
  // Apply the taller-modal CSS class. min-height has to live on the
  // container itself — .modal-body { overflow-y: auto } means an inner
  // child's min-height does not bubble up.
  const mc = document.getElementById('modal-container');
  if (mc) mc.classList.add('modal-tall');
}

// Evidence level config — mirrors Swift's EvidenceLevel enum
// (commonPractice/someEvidence/noEvidence). Number, color, and description
// match the iOS app exactly.
const EVIDENCE_LEVELS = {
  commonPractice: {
    label: 'Common Practice',
    description: 'Widely accepted standard practice',
    number: '1',
    color: '#22c55e',                       // green
    bgSoft: 'rgba(34,197,94,0.10)',
    bgStrong: 'rgba(34,197,94,0.20)',
    borderSoft: 'rgba(34,197,94,0.20)',
    borderStrong: 'rgba(34,197,94,0.50)',
  },
  someEvidence: {
    label: 'Some Evidence',
    description: 'Supported by limited studies or clinical data',
    number: '2',
    color: '#3b82f6',                       // blue
    bgSoft: 'rgba(59,130,246,0.10)',
    bgStrong: 'rgba(59,130,246,0.20)',
    borderSoft: 'rgba(59,130,246,0.20)',
    borderStrong: 'rgba(59,130,246,0.50)',
  },
  noEvidence: {
    label: 'Anecdotal Experience',
    description: 'Based on experience; no formal evidence',
    number: '3',
    color: '#f97316',                       // orange
    bgSoft: 'rgba(249,115,22,0.10)',
    bgStrong: 'rgba(249,115,22,0.20)',
    borderSoft: 'rgba(249,115,22,0.20)',
    borderStrong: 'rgba(249,115,22,0.50)',
  },
};
const EVIDENCE_ORDER = ['commonPractice', 'someEvidence', 'noEvidence'];

// Small filled-square number badge — visually equivalent to SF Symbol "N.square.fill"
function _evidenceBadge(level, size = 18) {
  const lvl = EVIDENCE_LEVELS[level] || EVIDENCE_LEVELS.commonPractice;
  const fontSize = Math.round(size * 0.6);
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;border-radius:4px;background:${lvl.color};color:#fff;font-size:${fontSize}px;font-weight:800;flex-shrink:0;line-height:1;">${lvl.number}</span>`;
}

function renderTipsPage(data) {
  const procedureTitle = (data && data.procedureTitle) || '';
  const tips = (data && data.tips) || [];
  const container = document.getElementById('app-content');

  // Local state — survives re-renders via closure.
  let selectedFilter = null;          // null = "All Tips"
  let filterMenuOpen = false;
  const expanded = new Set();          // set of tip indices (into the original `tips` array)
  const levelOf = tip => (tip && EVIDENCE_LEVELS[tip.evidenceLevel]) ? tip.evidenceLevel : 'commonPractice';

  function renderBody() {
    const filtered = selectedFilter
      ? tips.filter(t => levelOf(t) === selectedFilter)
      : tips;

    // Group tips by evidence level, preserving canonical order
    const groups = EVIDENCE_ORDER
      .map(key => [key, filtered.filter(t => levelOf(t) === key)])
      .filter(([, list]) => list.length > 0);

    // ── Header (procedure title + legend) ─────────────────────
    const legendRows = EVIDENCE_ORDER.map(key => {
      const lvl = EVIDENCE_LEVELS[key];
      return `
        <div style="display:flex;align-items:flex-start;gap:8px;">
          ${_evidenceBadge(key, 14)}
          <div style="display:flex;flex-direction:column;">
            <span style="font-size:0.78rem;font-weight:700;color:var(--text);line-height:1.2;">${lvl.label}</span>
            <span style="font-size:0.72rem;color:var(--text-secondary);line-height:1.3;">${lvl.description}</span>
          </div>
        </div>
      `;
    }).join('');

    const headerHtml = `
      <h2 style="font-size:1.25rem;font-weight:800;color:var(--text);margin:0;">${escapeHtml(procedureTitle)} Tips</h2>
      <div style="background:var(--sage-light);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;">
        ${legendRows}
      </div>
    `;

    // ── Filter dropdown ───────────────────────────────────────
    const curLvl = selectedFilter ? EVIDENCE_LEVELS[selectedFilter] : null;
    const curLabel = curLvl ? curLvl.label : 'All Tips';
    const curColor = curLvl ? curLvl.color : 'var(--text-secondary)';
    const curBg = curLvl ? `${curLvl.color}26` : 'rgba(0,0,0,0.05)';
    const curBorder = curLvl ? `${curLvl.color}80` : 'transparent';

    const filterOptionRow = (key, label, badgeHtml) => {
      const isSelected = (key === 'all' && selectedFilter === null) || key === selectedFilter;
      return `
        <button type="button" class="tips-filter-option" data-filter="${key}" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;background:none;border:none;border-top:1px solid var(--border);text-align:left;cursor:pointer;color:var(--text);font-size:0.88rem;">
          ${badgeHtml}
          <span style="flex:1;">${label}</span>
          ${isSelected ? `<i data-lucide="check" style="width:14px;height:14px;color:var(--sage-dark);"></i>` : ''}
        </button>
      `;
    };

    const filterHtml = `
      <div style="position:relative;align-self:flex-start;">
        <button type="button" id="tips-filter-btn" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:99px;border:2px solid ${curBorder};background:${curBg};color:${curColor};font-size:0.85rem;font-weight:700;cursor:pointer;">
          ${curLvl ? _evidenceBadge(selectedFilter, 14) : `<i data-lucide="list-filter" style="width:13px;height:13px;"></i>`}
          <span>${curLabel}</span>
          <i data-lucide="chevron-down" style="width:12px;height:12px;color:var(--text-muted);"></i>
        </button>
        <div id="tips-filter-menu"${filterMenuOpen ? '' : ' hidden'} style="position:absolute;left:0;top:calc(100% + 4px);background:var(--bg-elevated);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 20px rgba(0,0,0,0.18);min-width:220px;z-index:10;overflow:hidden;">
          <button type="button" class="tips-filter-option" data-filter="all" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;background:none;border:none;text-align:left;cursor:pointer;color:var(--text);font-size:0.88rem;">
            <i data-lucide="layout-grid" style="width:14px;height:14px;color:var(--text-muted);"></i>
            <span style="flex:1;">All Tips</span>
            ${selectedFilter === null ? `<i data-lucide="check" style="width:14px;height:14px;color:var(--sage-dark);"></i>` : ''}
          </button>
          ${EVIDENCE_ORDER.map(k => filterOptionRow(k, EVIDENCE_LEVELS[k].label, _evidenceBadge(k, 14))).join('')}
        </div>
      </div>
    `;

    // ── Tip groups ────────────────────────────────────────────
    const groupsHtml = groups.map(([key, list]) => {
      const lvl = EVIDENCE_LEVELS[key];
      const groupHeader = `
        <div style="display:flex;align-items:center;gap:8px;padding:0 2px;">
          ${_evidenceBadge(key, 18)}
          <span style="font-size:1rem;font-weight:700;color:var(--text);">${lvl.label}</span>
          <span style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);background:${lvl.bgStrong};padding:2px 9px;border-radius:99px;margin-left:auto;">${list.length}</span>
        </div>
      `;

      const cards = list.map(tip => {
        const idx = tips.indexOf(tip);
        const isOpen = expanded.has(idx);

        const refHtml = (tip.research && tip.research.length > 0) ? `
          <div style="display:flex;flex-direction:column;gap:6px;margin-top:4px;">
            <div style="display:flex;align-items:center;gap:6px;color:${lvl.color};font-size:0.82rem;font-weight:700;">
              <i data-lucide="search" style="width:13px;height:13px;"></i>
              <span>Research</span>
            </div>
            ${tip.research.map(r => `
              <a href="${escapeHtml(r.urlString || '#')}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:${lvl.color}14;border-radius:8px;text-decoration:none;color:var(--text);font-size:0.78rem;line-height:1.4;">
                <i data-lucide="link" style="width:13px;height:13px;color:${lvl.color};flex-shrink:0;"></i>
                <span style="flex:1;">${escapeHtml(r.title)}</span>
                <i data-lucide="external-link" style="width:12px;height:12px;color:var(--text-muted);flex-shrink:0;"></i>
              </a>
            `).join('')}
          </div>
        ` : '';

        return `
          <div class="tip-card" style="border:2px solid ${isOpen ? lvl.borderStrong : lvl.borderSoft};border-radius:14px;overflow:hidden;background:var(--bg-card);box-shadow:0 4px 8px rgba(0,0,0,0.05);">
            <button type="button" class="tip-card-header" data-tip-toggle="${idx}" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px;background:${lvl.bgSoft};border:none;text-align:left;cursor:pointer;">
              ${_evidenceBadge(key, 18)}
              <span style="flex:1;font-size:0.9rem;font-weight:700;color:var(--text);line-height:1.35;">${escapeHtml(tip.title)}</span>
              <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" style="width:18px;height:18px;color:${lvl.color};flex-shrink:0;"></i>
            </button>
            ${isOpen ? `
              <div style="display:flex;flex-direction:column;gap:12px;padding:14px;border-top:1px solid ${lvl.borderSoft};">
                <p style="font-size:0.9rem;line-height:1.5;color:var(--text);margin:0;">${escapeHtml(tip.description)}</p>
                ${refHtml}
                <div style="display:flex;justify-content:flex-end;">
                  <span style="display:inline-flex;align-items:center;gap:6px;font-size:0.72rem;font-weight:700;color:${lvl.color};background:${lvl.bgStrong};padding:4px 10px;border-radius:99px;">
                    ${_evidenceBadge(key, 11)}
                    ${lvl.label}
                  </span>
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      return `
        <section style="display:flex;flex-direction:column;gap:10px;">
          ${groupHeader}
          <div style="display:flex;flex-direction:column;gap:10px;">${cards}</div>
        </section>
      `;
    }).join('');

    const emptyHtml = filtered.length === 0 ? `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;gap:10px;color:var(--text-secondary);text-align:center;">
        <i data-lucide="inbox" style="width:42px;height:42px;"></i>
        <span style="font-size:0.95rem;font-weight:700;">No tips in this category</span>
      </div>
    ` : '';

    return `
      <div class="page-container fade-in" id="tips-page-container" style="padding-bottom: 40px;">
        <button class="btn-icon" id="tips-page-back" style="margin-bottom: 16px;">
          <i data-lucide="arrow-left" style="width:20px;height:20px;"></i>
          <span>Back</span>
        </button>
        <h1 style="font-size:1.4rem;font-weight:800;color:var(--text);margin:0 0 18px 0;">Tips &amp; Tricks</h1>
        <div style="display:flex;flex-direction:column;gap:18px;">
          ${headerHtml}
          ${filterHtml}
          <div style="display:flex;flex-direction:column;gap:18px;">
            ${groupsHtml}
            ${emptyHtml}
          </div>
        </div>
      </div>
    `;
  }

  function rerender() {
    container.innerHTML = renderBody();
    refreshIcons();
    wireEvents();
  }

  function wireEvents() {
    const backBtn = document.getElementById('tips-page-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => AppState.navigateBack());
    }
  }

  // Initial mount
  container.innerHTML = renderBody();
  refreshIcons();
  wireEvents();

  // Event delegation on app-content. The listener lives on the container so it
  // survives rerender()'s innerHTML swaps within one mount. We replace the
  // listener on every fresh mount so closure state stays current across visits.
  if (container._tipsClickHandler) {
    container.removeEventListener('click', container._tipsClickHandler);
  }
  container._tipsClickHandler = (e) => {
    // No-op if the tips page isn't currently mounted (defensive)
    if (!document.getElementById('tips-page-container')) return;

    // Filter button toggles the menu
    if (e.target.closest('#tips-filter-btn')) {
      filterMenuOpen = !filterMenuOpen;
      rerender();
      return;
    }
    // Filter option selects and closes the menu
    const opt = e.target.closest('.tips-filter-option');
    if (opt) {
      const f = opt.dataset.filter;
      selectedFilter = (f === 'all') ? null : f;
      filterMenuOpen = false;
      rerender();
      return;
    }
    // Tip card header toggles expansion
    const toggle = e.target.closest('[data-tip-toggle]');
    if (toggle) {
      const idx = parseInt(toggle.dataset.tipToggle, 10);
      if (expanded.has(idx)) expanded.delete(idx);
      else expanded.add(idx);
      rerender();
      return;
    }
    // Click outside the filter menu closes it (but not on the trigger)
    if (filterMenuOpen && !e.target.closest('#tips-filter-menu')) {
      filterMenuOpen = false;
      rerender();
    }
  };
  container.addEventListener('click', container._tipsClickHandler);
}
