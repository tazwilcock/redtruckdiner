// Copyright Date
const rightNow = new Date();
document.querySelector("#year").textContent = rightNow.getFullYear();

// Dropdown Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const toggleOnClick = document.getElementById("hamburgerBtn");

toggleOnClick.onclick = toggleMenu;
