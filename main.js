function openForm(){
    const openBtn = document.querySelector('.form-container');
    openBtn.style.display = 'block';
}
function closeForm(){
    const closeBtn = document.querySelector('.form-container');
    closeBtn.style.display = 'none';
}

function openSideBar() {
  const opensideBar = document.querySelector('.side__bar');
  opensideBar.style.transform = 'translateX(0%)';
}

function closeSideBar() {
  const closesideBar = document.querySelector('.side__bar');
  closesideBar.style.transform = 'translateX(100%)';
}

// img slider 

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      centeredSlides: true
      
    },
     // when window width is >= 900px
     900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
       centeredSlides: false
      
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 5,
      centeredSlides: false
    },
     
     // when window width is >= 1500px
     1500: {
       slidesPerView: 5,
       slidesPerGroup: 5,
       spaceBetween: 5,
       centeredSlides: false
     },
     
     // when window width is >= 1800px
    1800: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 5,
      centeredSlides: false
    }
  }
});
