window.onload = () => {
  // Menu Bar
  let burgerMenu = document.getElementById("burger-menu");
  let closeMenu = document.getElementById("close-menu");
  let linksMenu = document.getElementById("links-menu");

  burgerMenu.addEventListener("click", () => {
    linksMenu.classList.remove("translate-x-full");
    closeMenu.classList.remove("hidden");
    burgerMenu.classList.add("hidden");
  });

  closeMenu.addEventListener("click", () => {
    linksMenu.classList.add("translate-x-full");
    burgerMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  });

  // carousel
  let carousel = document.getElementById("carousel");
  let carouselBtns = document.getElementById("carousel-btn");
  let itemId = 0;

  let timer = setInterval(() => {
    animateCarousel();
  }, 4000);

  for (let i = 0; i < carouselBtns.children.length; i++) {
    carouselBtns.children[i].addEventListener("click", () => {
      clearInterval(timer);
      itemId = i - 1;
      animateCarousel();
      timer = setInterval(() => {
        animateCarousel();
      }, 4000);
    });
  }

  function animateCarousel() {
    itemId = itemId + 1 === 3 ? 0 : itemId + 1;
    for (let i = 0; i < carousel.children.length; i++) {
      if (i === itemId) {
        carousel.children[i].classList.remove("opacity-0", "invisible");
        carousel.children[i].classList.add("opacity-100");
        carouselBtns.children[i].classList.add("bg-white");
      } else {
        carousel.children[i].classList.remove("opacity-100");
        carousel.children[i].classList.add("opacity-0", "invisible");
        carouselBtns.children[i].classList.remove("bg-white");
      }
    }
  }
};
