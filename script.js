const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector(".menu");
const hambIcon = document.querySelector("#hamb");
const closeIcon = document.querySelector("#close");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  menuToggle.checked = false;
  mobileMenu.style.transform = "translateY(-150%)";
  hambIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}

menuToggle.addEventListener("click", () => {
  if (menuToggle.checked) {
    mobileMenu.style.transform = "translateY(0)";
    hambIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.style.transform = "translateY(-150%)";
    hambIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
