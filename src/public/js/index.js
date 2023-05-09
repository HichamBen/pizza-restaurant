window.onload = () => {
  // Menu Bar
  let burgerMenu = document.getElementById("burger-menu");
  let closeMenu = document.getElementById("close-menu");
  let linksMenu = document.getElementById("links-menu");

  burgerMenu.addEventListener("click", () => {
    linksMenu.classList.remove("translate-x-full");
    linksMenu.classList.remove("invisible");

    closeMenu.classList.remove("hidden");
    burgerMenu.classList.add("hidden");
  });

  closeMenu.addEventListener("click", () => {
    linksMenu.classList.add("translate-x-full");
    linksMenu.classList.add("invisible");
    burgerMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  });
};
