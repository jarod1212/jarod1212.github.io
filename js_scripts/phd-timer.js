// PhD timer + progress bar
(function () {
  const start = new Date("Jan 1, 2025").getTime();
  const end = new Date("Jan 5, 2028").getTime();

  const bar = document.getElementById("progress-bar");
  const cdTxt = document.getElementById("countdown");
  const yyEl = document.getElementById("yy");
  const mmEl = document.getElementById("mm");

  function diffYM(now, target) {
    const ms = Math.max(0, target - now);
    const min = Math.floor(ms / 60000);
    const years = Math.floor(min / (60 * 24 * 365.25));
    const remY = min - Math.floor(years * 365.25 * 24 * 60);
    const months = Math.floor(remY / (60 * 24 * 30.44));
    return { years, months };
  }

  function updatePhD() {
    const now = Date.now();
    const total = end - start;
    const done = Math.max(0, Math.min(total, now - start));
    const pct = (done / total) * 100;

    if (bar) bar.style.width = pct.toFixed(2) + "%";

    const d = diffYM(now, end);
    if (yyEl) yyEl.textContent = d.years;
    if (mmEl) mmEl.textContent = d.months;
    if (cdTxt) cdTxt.textContent = (100 - pct).toFixed(1) + "% remaining";
  }

  updatePhD();
  setInterval(updatePhD, 30000);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
