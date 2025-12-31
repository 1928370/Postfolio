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

    // Typing effect for the main title
    const typingText = document.getElementById('typing-text');
    const text = "Capturando momentos com excelência";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const header = document.getElementById('main-header');
        if (splash) {
            splash.style.transition = 'opacity 1s ease-out';
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 1000);
        }
        if (header) {
            header.classList.remove('hidden');
        }
    }, 3000);
});
