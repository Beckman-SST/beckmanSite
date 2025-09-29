// Função para adicionar classe ativa ao link do menu atual
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // WhatsApp
    const whatsappButton = document.getElementById('whatsappButton');
    const whatsappModal = document.getElementById('whatsappModal');
    const confirmWhatsapp = document.getElementById('confirmWhatsapp');
    const cancelWhatsapp = document.getElementById('cancelWhatsapp');

    whatsappButton.addEventListener('click', function() {
        whatsappModal.style.display = 'flex';
    });

    confirmWhatsapp.addEventListener('click', function() {
        window.open('https://wa.me/559882256917', '_blank');
        whatsappModal.style.display = 'none';
    });

    cancelWhatsapp.addEventListener('click', function() {
        whatsappModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === whatsappModal) {
            whatsappModal.style.display = 'none';
        }
    });
});

// Funcionalidade do acordeão na página de serviços
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
});