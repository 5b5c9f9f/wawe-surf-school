const swiper = new Swiper('.swiper', {
  /* direction: 'vertical', */
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger__menu');
const body = document.body;

burger.addEventListener('click', () => {
    // Переключаем класс для анимации крестика
    burger.classList.toggle('active');
    
    // Переключаем класс видимости меню (убедитесь, что в CSS у .burger__menu стоит display: none)
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        body.style.overflow = 'auto'; // Включаем скролл обратно
    } else {
        menu.style.display = 'flex';
        body.style.overflow = 'hidden'; // Выключаем скролл
    }
});

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.burger__list-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.style.display = 'none';
        body.style.overflow = 'auto';
    });
});
