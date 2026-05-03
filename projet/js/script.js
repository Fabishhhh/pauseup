document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Animation au scroll (Cards & Stats) ---
    // On garde ta logique qui fonctionne très bien !
    const elements = document.querySelectorAll(".card, .stat-box, .feature");

    const scrollAnimation = () => {
        const trigger = window.innerHeight * 0.85;

        elements.forEach((el) => {
            if (!el.dataset.initialized) {
                el.style.opacity = "0";
                el.style.transform = "translateY(40px)";
                el.style.transition = "all 0.6s ease";
                el.dataset.initialized = "true";
            }

            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); 

    // --- 2. Menu Burger (CORRIGÉ) ---
    // On utilise querySelector('.menu-toggle') car c'est la classe dans ton HTML
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            // Active le menu plein écran
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

            // Empêche le scroll de la page quand le menu est ouvert
            if (navLinks.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });

        // Fermer le menu quand on clique sur un lien (utile pour les ancres)
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
                document.body.style.overflow = "auto";
            });
        });
    }
});