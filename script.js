document.addEventListener('DOMContentLoaded', () => { 

    const mobileMenu = document.getElementById('mobile-menu'); 
    const navLinks = document.querySelector('.nav-links'); 

    if (mobileMenu && navLinks) { 
        mobileMenu.addEventListener('click', () => { 
            navLinks.classList.toggle('show'); }); 
        } 
    else { 
        console.error('Элемент меню не найден'); 
    } 
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const section2 = document.getElementById('HeroesSECTION');

    scrollButton.addEventListener('click', () => {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});
