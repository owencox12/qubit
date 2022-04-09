let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1300: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
        },
      }
    },
    navigation: {
        nextEl: ".slider-right",
        prevEl: ".slider-left",
      },
})


let burger = document.querySelector(".header__buttons_burger")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__buttons_burger_active")
  document.querySelector(".header__burger_list").classList.toggle("header__burger_list_active")
  document.querySelector("body").classList.toggle("lock")
})

window.addEventListener("scroll", function(){
  if (scrollY >= 100) {
    document.querySelector(".header").classList.add("header__active")
  } else {
    document.querySelector(".header").classList.remove("header__active")
  }
})