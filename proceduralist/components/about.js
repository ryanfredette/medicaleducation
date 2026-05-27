/* ============================================================
   about.js – About page / legal disclaimer full page view
   ============================================================ */

/**
 * Render the About page view.
 */
function renderAboutPage() {
  const container = document.getElementById('app-content');
  if (!container) return;

  container.innerHTML = `
    <div class="page-container fade-in" id="about-page-container" style="padding-bottom: 40px;">
      <!-- Back Button -->
      <button class="btn-icon" id="about-back" style="margin-bottom: 16px;">
        <i data-lucide="arrow-left" style="width:20px;height:20px;"></i>
        <span>Back</span>
      </button>

      <!-- Title & Header -->
      <h2 style="font-size:1.6rem;font-weight:800;color:var(--text);margin-bottom:24px;">About The App</h2>

      <div style="display:flex;flex-direction:column;gap:20px;line-height:1.6;max-width:650px;">
        <div>
          <h3 style="font-size:1.15rem;font-weight:750;color:var(--text);margin-bottom:6px;">Proceduralist</h3>
          <p style="font-size:0.9rem;color:var(--text-secondary);">
            Version 2.0 (Web PWA)
          </p>
        </div>

        <div>
          <h4 style="font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.02em;">Contributors</h4>
          <div style="font-size:0.92rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;align-items:center;gap:8px;"><i data-lucide="user" style="width:16px;height:16px;color:var(--sage-dark);"></i> <span>Ryan Fredette, MD</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><i data-lucide="user" style="width:16px;height:16px;color:var(--sage-dark);"></i> <span>Takugo Cho, MD</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><i data-lucide="user" style="width:16px;height:16px;color:var(--sage-dark);"></i> <span>Ann Yong Lim, MD</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><i data-lucide="user" style="width:16px;height:16px;color:var(--sage-dark);"></i> <span>Preeti Jossy, MD</span></div>
          </div>
        </div>

        <div style="background:rgba(239,68,68,0.04);border:1.5px solid rgba(239,68,68,0.25);border-radius:var(--radius);padding:16px 20px;margin-top:8px;">
          <h4 style="font-size:0.88rem;font-weight:700;text-transform:uppercase;color:#b91c1c;margin-bottom:8px;letter-spacing:0.02em;display:flex;align-items:center;gap:6px;">
            <i data-lucide="shield-alert" style="width:16px;height:16px;"></i>
            <span>Medical Disclaimer</span>
          </h4>
          <p style="font-size:0.85rem;color:#7f1d1d;line-height:1.5;">
            This application is for educational and reference purposes only. Clinical decisions and patient care should always be guided by professional training, institutional policies, and licensed medical oversight.
          </p>
        </div>

        <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:20px;text-align:center;">
          <span style="font-size:0.9rem;color:var(--text-muted);">Found an error or have a suggestion? We appreciate your feedback.</span>
          <div style="margin-top:8px;">
            <a href="mailto:proceduralist@outlook.com?subject=Proceduralist%20Feedback" 
               style="color:var(--sage-dark);text-decoration:none;font-weight:600;font-size:0.95rem;display:inline-flex;align-items:center;gap:6px;">
              <i data-lucide="mail" style="width:16px;height:16px;"></i>
              <span>Email Feedback</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind back button click
  document.getElementById('about-back').addEventListener('click', () => {
    navigateBack();
  });

  // Reinitialize icons
  if (typeof refreshIcons === 'function') {
    refreshIcons();
  }
}
