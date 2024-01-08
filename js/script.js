const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true /* use rewind if you don't want loop */,
  margin: 20,
  /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 4,
    },
  },
});
