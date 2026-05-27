/* ============================================================
   references-page.js – Grouped academic references list
   ============================================================ */

/**
 * Render the academic References page.
 */
function renderReferencesPage() {
  const container = document.getElementById('app-content');

  // Load references data (global from data/references-data.js)
  const refs = typeof REFERENCES_DATA !== 'undefined' ? REFERENCES_DATA : [];

  if (refs.length === 0) {
    container.innerHTML = `
      <div class="page-container fade-in" style="text-align:center;padding:48px 16px;color:var(--text-muted);">
        <i data-lucide="book-open" style="width:48px;height:48px;margin-bottom:12px;"></i>
        <p style="font-size:1rem;font-weight:600;">No references available</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  // Group references by quickTitle (preserves original order of appearance)
  const groups = {};
  for (const ref of refs) {
    if (!groups[ref.quickTitle]) {
      groups[ref.quickTitle] = [];
    }
    groups[ref.quickTitle].push(ref);
  }

  container.innerHTML = `
    <div class="page-container fade-in">
      <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:16px;color:var(--text);">Academic References</h2>
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.45;margin-bottom:24px;">
        Core medical literature, procedural guides, and clinical trial evidence supporting the bedside instructions.
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        ${Object.keys(groups).map(title => `
          <div class="card" style="padding:18px;border:1.5px solid var(--border);border-radius:var(--radius);">
            <h3 style="font-size:1.05rem;font-weight:750;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:6px;">
              <i data-lucide="bookmark" style="width:16px;height:16px;color:var(--sage-dark);"></i>
              <span>${escapeHtml(title)}</span>
            </h3>
            
            <div style="display:flex;flex-direction:column;gap:12px;">
              ${groups[title].map((item, idx) => `
                <div style="display:flex;align-items:flex-start;gap:10px;font-size:0.86rem;line-height:1.5;color:var(--text-secondary);">
                  <span style="font-weight:700;color:var(--sage-dark);min-width:16px;text-align:right;">[${idx + 1}]</span>
                  <div style="flex:1;">
                    <span>${escapeHtml(item.text)}</span>
                    ${item.url ? `
                      <div style="margin-top:4px;">
                        <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" 
                           style="color:var(--sage-dark);text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:3px;">
                          Open Source <i data-lucide="external-link" style="width:12px;height:12px;"></i>
                        </a>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  refreshIcons();
}
