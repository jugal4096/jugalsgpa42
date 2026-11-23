/* ================= GRADLY 2.0 GLOBAL ANNOUNCEMENT ================= */
(() => {
  // Retire Gradly V1 at the official Gradly-V2 launch time (20:00 IST, 24 Nov 2026).
  // Before the cutoff, leave the existing announcement and all page behavior untouched.
  const GRADLY_V2_LAUNCH_UTC = Date.UTC(2026, 10, 24, 14, 30, 0);
  let retirementShown = false;
  const showRetirementGate = () => {
    if (retirementShown || Date.now() < GRADLY_V2_LAUNCH_UTC) return;
    retirementShown = true;
    document.documentElement.style.cssText = "margin:0!important;padding:0!important;overflow:hidden!important;background:#070b16!important";
    document.body.innerHTML = "";
    const style = document.createElement("style");
    style.textContent = "*{box-sizing:border-box}body{margin:0!important;min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(ellipse at 50% 0%,#172554 0%,#090d1a 48%,#03050b 100%);color:#f8fafc;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;text-align:center}.gradly-retired{width:min(520px,100%);padding:clamp(30px,7vw,54px) clamp(22px,6vw,42px);border:1px solid rgba(148,163,184,.28);border-radius:28px;background:rgba(15,23,42,.78);box-shadow:0 30px 100px #0009;backdrop-filter:blur(18px)}.gradly-retired .mark{font-size:46px;margin-bottom:18px}.gradly-retired .tag{display:inline-block;padding:7px 14px;border:1px solid #64748b66;border-radius:99px;color:#cbd5e1;font-size:12px;font-weight:750;letter-spacing:2px}.gradly-retired h1{font-size:clamp(30px,7vw,42px);line-height:1.12;margin:22px 0 14px}.gradly-retired p{color:#cbd5e1;font-size:16px;line-height:1.7;margin:0 0 26px}.gradly-retired a{display:block;padding:15px 22px;border-radius:14px;background:linear-gradient(110deg,#60a5fa,#34d399);color:#06111f;text-decoration:none;font-weight:800;font-size:16px}.gradly-retired .foot{font-size:12px;color:#94a3b8;margin:18px 0 0}";
    document.head.appendChild(style);
    const card=document.createElement("main");
    card.className="gradly-retired";
    card.innerHTML='<div class="tag">GRADLY · NEXT CHAPTER</div><div class="mark" aria-hidden="true">🚀</div><h1>Gradly-V1 is outdated.</h1><p>Thank you for being part of the journey. Gradly-V2 is now live with a refreshed academic experience. Continue on the new platform.</p><a href="https://gradly-v2.vercel.app/">Continue to Gradly-V2</a><div class="foot">You will be redirected automatically in a few seconds.</div>';
    document.body.appendChild(card);
    window.setTimeout(()=>{window.location.replace("https://gradly-v2.vercel.app/")},8000);
  };
  showRetirementGate();
  if (!retirementShown) {
    const checkLaunch = () => showRetirementGate();
    window.setInterval(checkLaunch,1000);
    window.addEventListener("focus",checkLaunch);
    window.addEventListener("pageshow",checkLaunch);
    document.addEventListener("visibilitychange",checkLaunch);
  } else { return; }

  // login.html already contains the announcement and its existing controller.
  // Reuse it there to avoid creating a duplicate popup.
  if (document.getElementById("gradlyAnnouncement")) return;

  const style = document.createElement("style");
  style.textContent = `
    .gradly-global-announcement {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px;
      background: rgba(2, 6, 23, 0.72);
      backdrop-filter: blur(10px);
      z-index: 100000;
      animation: gradlyGlobalFadeIn .3s ease;
    }
    .gradly-global-announcement.hidden { display: none; }
    .gradly-global-card {
      position: relative;
      width: min(430px, 100%);
      padding: 34px 30px 30px;
      text-align: center;
      border-radius: 28px;
      border: 1px solid rgba(167, 139, 250, .42);
      background:
        radial-gradient(circle at top right, rgba(96, 165, 250, .20), transparent 38%),
        radial-gradient(circle at bottom left, rgba(167, 139, 250, .18), transparent 42%),
        linear-gradient(145deg, rgba(15, 23, 42, .97), rgba(2, 6, 23, .98));
      box-shadow: 0 35px 100px rgba(0,0,0,.72), 0 0 55px rgba(96,165,250,.12);
      color: #fff;
      animation: gradlyGlobalPopIn .4s ease;
      font-family: inherit;
    }
    .gradly-global-close {
      position: absolute;
      top: 12px;
      right: 14px;
      width: 36px;
      height: 36px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 50%;
      background: rgba(255,255,255,.08);
      color: #fff;
      font-size: 25px;
      line-height: 1;
      cursor: pointer;
    }
    .gradly-global-badge {
      display: inline-block;
      padding: 7px 14px;
      border-radius: 999px;
      background: linear-gradient(135deg, rgba(96,165,250,.20), rgba(167,139,250,.25));
      border: 1px solid rgba(167,139,250,.35);
      color: #ddd6fe;
      font-size: .78rem;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    .gradly-global-rocket {
      margin: 17px 0 8px;
      font-size: 3.3rem;
      animation: gradlyGlobalFloat 2.5s ease-in-out infinite;
    }
    .gradly-global-card h3 {
      margin: 0 0 12px;
      font-size: 1.65rem;
    }
    .gradly-global-card p {
      margin: 0 0 20px;
      color: rgba(255,255,255,.70);
      font-size: .96rem;
      line-height: 1.65;
    }
    .gradly-global-note {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      margin-bottom: 23px;
      padding: 13px 14px;
      text-align: left;
      border-radius: 15px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.09);
      color: #e5e7eb;
      font-size: .86rem;
      line-height: 1.45;
    }
    .gradly-global-continue {
      width: 100%;
      padding: 13px 18px;
      border: none;
      border-radius: 999px;
      background: linear-gradient(135deg, #60a5fa, #34d399);
      color: #020617;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 14px 35px rgba(52,211,153,.28);
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .gradly-global-continue:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 45px rgba(96,165,250,.35);
    }
    @keyframes gradlyGlobalFadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes gradlyGlobalPopIn {
      from { opacity: 0; transform: translateY(15px) scale(.94); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes gradlyGlobalFloat {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @media (max-width: 600px) {
      .gradly-global-card { padding: 30px 22px 24px; border-radius: 24px; }
      .gradly-global-card h3 { font-size: 1.4rem; }
    }
  `;
  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.className = "gradly-global-announcement hidden";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "true");
  popup.setAttribute("aria-labelledby", "gradlyGlobalAnnouncementTitle");
  popup.innerHTML = `
    <div class="gradly-global-card">
      <button class="gradly-global-close" aria-label="Close announcement">×</button>
      <div class="gradly-global-badge">GRADLY • 2.0</div>
      <div class="gradly-global-rocket" aria-hidden="true">🚀</div>
      <h3 id="gradlyGlobalAnnouncementTitle">Gradly 2.0 is Coming</h3>
      <p>Your academic companion is getting a major upgrade. A fresh experience, smarter features and more are on the way.</p>
      <div class="gradly-global-note">
        <span>✨</span>
        <span><strong>Stay tuned.</strong> The next chapter of Gradly is almost here.</span>
      </div>
      <button class="gradly-global-continue">Continue with Gradly 1.0</button>
    </div>
  `;
  document.body.appendChild(popup);

  const close = () => popup.classList.add("hidden");
  popup.querySelector(".gradly-global-close").addEventListener("click", close);
  popup.querySelector(".gradly-global-continue").addEventListener("click", close);
  popup.addEventListener("click", e => {
    if (e.target === popup) close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });

  // Show on every page load/refresh. No localStorage or sessionStorage.
  window.setTimeout(() => popup.classList.remove("hidden"), 500);
})();