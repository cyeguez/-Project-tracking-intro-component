const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.remove("nav__hidden");
  closeIcon.style.display = "block";
  menuIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  nav.classList.add("nav__hidden");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (
    !nav.classList.contains("nav__hidden") &&
    !nav.contains(e.target) &&
    e.target !== menuIcon &&
    e.target !== closeIcon
  ) {
    nav.classList.add("nav__hidden");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
});