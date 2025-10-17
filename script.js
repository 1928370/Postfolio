// script.js
// Função para abrir/fechar o menu mobile

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        // toggle menu visibility and aria-expanded for accessibility
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.addEventListener('click', function () {
            const opened = mobileMenu.classList.toggle('hidden') === false;
            menuToggle.setAttribute('aria-expanded', String(opened));
        });

        // close menu when a link is clicked (good for single-page nav)
        mobileMenu.addEventListener('click', function (e) {
            const link = e.target.closest('a');
            if (link) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
