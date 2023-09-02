const swiper = new Swiper('.banner-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:2000,
    grabCursor: true,
    effect: 'cube',
    cubeEffect: {
      shadow: true,
      slideShows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });