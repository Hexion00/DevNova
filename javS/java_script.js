/*MENU HAMBURGER*/
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("menu_active");
        hamburger.classList.toggle("hamburger_active");
    });

    // Chiudi il menu quando si clicca su un link
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("menu_active");
            hamburger.classList.remove("hamburger_active");
        });
    });
});

/*MENU CHI SONO*/
let activeMenu = null;

function toggleMenu_1(id, element) {
    let menu = document.getElementById(id);
    let isOpen = menu.style.display === "block";
    
    if (activeMenu && activeMenu !== menu) {
        activeMenu.style.display = "none";
        activeMenu.previousElementSibling.classList.remove("active");
    }
    
    if (isOpen) {
        menu.style.display = "none";
        element.classList.remove("active");
        activeMenu = null;
    } else {
        menu.style.display = "block";
        element.classList.add("active");
        activeMenu = menu;
    }
}

/*=====---javascript contatti---=====*/
function showOverlay(title, details) {
    const overlay = document.getElementById('overlay');
    document.getElementById('overlay-title').textContent = title;
    document.getElementById('overlay-details').textContent = details;
    overlay.classList.remove('hidden');
  }
  
  function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
  }