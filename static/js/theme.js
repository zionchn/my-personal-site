const root = document.documentElement;
const btn = document.getElementById("theme-toggle");

function updateLabel() {
  const isDark = root.getAttribute("data-theme") === "dark";
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

btn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateLabel();
});

updateLabel();