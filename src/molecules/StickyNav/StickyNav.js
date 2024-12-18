import { observe } from "selector-observer";

observe("#stickynavbar", {
  add(element) {
    function handleScroll() {
      var navbar = element;
      const header = document.getElementById("header");
      const headerHeight = header.getBoundingClientRect()?.height;

      if (navbar) {
        if (window.pageYOffset >= headerHeight) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
          navbar.removeAttribute("style");
        }
      }
    }

    window.onscroll = function () {
      handleScroll();
    };
  },
});

window.addEventListener("scroll", () => {
  let currentElement = "";
  const specialtyBlocks = document.querySelectorAll(".specialty-block");
  const links = document.querySelectorAll(".sticky-nav__item");

  specialtyBlocks.forEach((block) => {
    const blockTop = block.offsetTop;
    const blockHeight = block.clientHeight;
    if (scrollY >= blockTop - blockHeight / 3) {
      currentElement = block.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    // console.log(currentElement);
    if (link.getAttribute("href") === `#${currentElement}`) {
      link.classList.add("active");
    }
  });
});
