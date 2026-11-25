const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

function setOpen(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));

// close when a link is tapped, Escape is pressed, or the user taps outside
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
document.addEventListener("click", (e) => { if (!e.target.closest("nav")) setOpen(false); });

// reset if the window is resized up to desktop width
window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
  if (e.matches) setOpen(false);
});