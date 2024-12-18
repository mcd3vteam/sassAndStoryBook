import { observe } from "selector-observer";

observe("#hamburger", {
  add(element) {
    const navLinks = document.querySelector("#nav-links");
    const header = document.querySelector("#header");
    const topNav = document.querySelector("#top-nav");
    const globalSearch = header.querySelector(".header__global-search");
    const globalSearchInput = header.querySelector("input");
    const globalSearchDropdownContainer = header.querySelector(
      ".dropdown-container"
    );

    element.addEventListener("click", () => {
      if (!element.classList.contains("open")) {
        // close global search
        if (globalSearchInput) {
          globalSearchInput.value = "";
        }

        if (globalSearchDropdownContainer) {
          while (globalSearchDropdownContainer.firstChild) {
            globalSearchDropdownContainer.removeChild(
              globalSearchDropdownContainer.firstChild
            );
          }
        }

        topNav.classList.remove("search-open");
        if (globalSearch) {
          globalSearch.classList.remove("open");
        }
      }

      if (!element.classList.contains("open")) {
        header.classList.add("open");
        navLinks.classList.add("open");
        //navLinks.style.display = "flex";
        element.classList.add("open");
      } else {
        header.classList.remove("open");
        navLinks.classList.remove("open");
        //navLinks.style.display = "none";
        element.classList.remove("open");
      }
    });
  },
});

observe(".has-submenu", {
  add(element) {
    const header = document.getElementById("header");
    const globalSearch = header.querySelector(".header__global-search");
    const globalSearchInput = header.querySelector("input");
    const globalSearchDropdownContainer = header.querySelector(
      ".dropdown-container"
    );

    element.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const topNav = document.querySelector("#top-nav");
      const cardContainer = document.querySelector(".header__nav-preview");
      const menubar = document.querySelector("#nav-links-ul");

      if (!element.matches(".open")) {
        // element is closed, open it
        topNav.classList.add("open");
        cardContainer.classList.remove("hidden");
        element.setAttribute("aria-expanded", "true");
        menubar.setAttribute("aria-expanded", "true");
        header.classList.add("open");
      } else {
        //element is opened, close it
        topNav.classList.remove("open");
        cardContainer.classList.add("hidden");
        element.setAttribute("aria-expanded", "false");
        menubar.setAttribute("aria-expanded", "false");
        header.classList.remove("open");
      }

      element.classList.toggle("open");
      const card = cardContainer.querySelector(`#${element.dataset.target}`);
      card.classList.toggle("hidden");

      // look for all open menus
      const allOpenMenus = document.querySelectorAll(".has-submenu.open");
      if (allOpenMenus.length > 1) {
        const otherMenus = [...allOpenMenus].filter(
          (elem) => elem.dataset.target !== element.dataset.target
        );

        // hide the "other" ones - not the currently selected one
        otherMenus.forEach((item) => {
          item.classList.toggle("open");
          item.setAttribute("aria-expanded", "false");
          const itemCard = cardContainer.querySelector(
            `#${item.dataset.target}`
          );
          itemCard.classList.toggle("hidden");
        });
      }

      // close global search
      // clear input
      if (globalSearchInput) {
        globalSearchInput.value = "";
      }
      if (globalSearchDropdownContainer) {
        while (globalSearchDropdownContainer.firstChild) {
          globalSearchDropdownContainer.removeChild(
            globalSearchDropdownContainer.firstChild
          );
        }
      }

      topNav.classList.remove("search-open");
      if (globalSearch) {
        globalSearch.classList.remove("open");
      }
    });
  },
});

// GLOBAL SEARCH
observe("#header", {
  add(element) {
    const navLinks = document.querySelector("#nav-links");
    const headerTopNav = element.querySelector("#top-nav");
    const hamburger = element.querySelector("#hamburger");
    const globalSearch = element.querySelector(".header__global-search");
    const searchInput = element.querySelector("input");
    const dropdownContainer = element.querySelector(".dropdown-container");
    const searchBtn = element.querySelector(".header__search-btn");
    const openBtnLabel = searchBtn.getAttribute("data-open-label");
    const closeBtnLabel = searchBtn.getAttribute("data-close-label");
    const header = document.querySelector("#header");

    if (searchBtn) {
      searchBtn.addEventListener("click", (event) => {
        if (headerTopNav.classList.contains("search-open")) {
          //close searchbar
          // clear input
          if (searchInput) {
            searchInput.value = "";
          }
          if (dropdownContainer) {
            while (dropdownContainer.firstChild) {
              dropdownContainer.removeChild(dropdownContainer.firstChild);
            }
          }

          // close global search bar
          headerTopNav.classList.remove("search-open");
          if (globalSearch) {
            globalSearch.classList.remove("open");
            searchBtn.setAttribute("aria-label", openBtnLabel);
            searchBtn.setAttribute("aria-expanded", "false");
          }

          // close header
          header.classList.remove("open");
        } else {
          // open searchbar
          headerTopNav.classList.add("search-open");
          if (globalSearch) {
            globalSearch.classList.add("open");
            globalSearch.querySelector(".input-container").click();
          }
          searchBtn.setAttribute("aria-label", closeBtnLabel);
          searchBtn.setAttribute("aria-expanded", "true");

          header.classList.add("open");

          // close header nav
          headerTopNav.classList.remove("open");
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");

          // close open nav submenus
          const cardContainer = document.querySelector(".header__nav-preview");
          const allOpenMenus = document.querySelectorAll(".has-submenu.open");
          if (allOpenMenus.length > 0) {
            const otherMenus = [...allOpenMenus];

            // hide the "other" ones - not the currently selected one
            otherMenus.forEach((item) => {
              item.classList.toggle("open");
              item.setAttribute("aria-expanded", "false");
              const itemCard = cardContainer.querySelector(
                `#${item.dataset.target}`
              );
              itemCard.classList.toggle("hidden");
            });
          }
        }
      });
    }

    const inputSearchBtn = element.querySelector(".search-bar__search-btn");

    inputSearchBtn.addEventListener("keydown", (event) => {
      const { target, key, code } = event;

      const closeSearchButton = element.querySelector(".header__search-btn");
      if (target.matches(".search-bar__search-btn") && key === "Tab") {
        closeSearchButton.focus();
        event.preventDefault();
      }
    });
  },
});

// SCREENREADER
observe(".sr__only.feature-card-data", {
  add(element) {
    const menuListItem = element.closest("li:has(.header__nav-menu)");
    const menuLink =
      menuListItem?.querySelector(".has-submenu[data-target]") || {};
    const previewCardId = menuLink?.getAttribute("data-target") || "";
    const previewCard = document.getElementById(previewCardId);

    //console.log("screenreaderjs", {menuLink, previewCardId, previewCard, element,});
    element.addEventListener(
      "focusin",
      () => {
        previewCard.classList.add("active");
      },
      true
    );
    element.addEventListener(
      "focusout",
      () => {
        previewCard.classList.remove("active");
      },
      true
    );
  },
});

function onClickCloseNav(event) {
  const topNav = document.querySelector("#top-nav");
  const header = document.querySelector("#header");
  if (event.target.closest("#header") || !header.classList.contains("open")) {
    return;
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector("#nav-links");
  const globalSearch = header.querySelector(".header__global-search");
  const globalSearchInput = header.querySelector("input");
  const globalSearchDropdownContainer = header.querySelector(
    ".dropdown-container"
  );

  // close global search
  if (!hamburger.classList.contains("open")) {
    if (globalSearchInput) {
      globalSearchInput.value = "";
    }

    if (globalSearchDropdownContainer) {
      while (globalSearchDropdownContainer.firstChild) {
        globalSearchDropdownContainer.removeChild(
          globalSearchDropdownContainer.firstChild
        );
      }
    }

    topNav.classList.remove("search-open");
    if (globalSearch) {
      globalSearch.classList.remove("open");
    }
  }

  header.classList.remove("open");
  navLinks.classList.remove("open");
  hamburger.classList.remove("open");
  topNav.classList.remove("open");

  const level1Element = document.querySelector(".has-submenu.open");
  if (level1Element) {
    level1Element.classList.remove("open");
    const cardContainer = document.querySelector(".header__nav-preview");
    if (cardContainer) {
      const card = cardContainer.querySelector(
        `#${level1Element.dataset.target}`
      );
      cardContainer.classList.add("hidden");
      if (card) {
        card.classList.add("hidden");
      }
    }
  }
}

// STICKY HEADER
let lastKnownScrollY = 0;
let currentScrollY = 0;
const idOfHeader = "header";
let eleHeader = null;
const classes = {
  pinned: "pin",
  unpinned: "unpin",
};
const idOfStickyNav = "stickynavbar";
let stickyNavBarElement = null;

function pin() {
  if (!eleHeader) return;
  eleHeader.classList.remove(classes.unpinned);
  eleHeader.classList.add(classes.pinned);
  if (stickyNavBarElement && !eleHeader.querySelectorAll(".open")?.length) {
    const height = eleHeader.getBoundingClientRect().height;
    stickyNavBarElement.setAttribute("style", `top:${height}px;`);
  }
}

function unpin(reset) {
  if (!eleHeader) return;
  if (eleHeader.classList.contains(classes.pinned)) {
    eleHeader.classList.remove(classes.pinned);
  }
  if (reset) {
    eleHeader.classList.remove(classes.unpinned);
  } else {
    eleHeader.classList.add(classes.unpinned);
  }
  if (stickyNavBarElement) {
    stickyNavBarElement.removeAttribute("style");
  }
}

function update() {
  const headerHeight = eleHeader.getBoundingClientRect()?.height;
  if (
    (currentScrollY < lastKnownScrollY && currentScrollY > headerHeight) ||
    currentScrollY === 0
  ) {
    pin();
  } else {
    unpin(currentScrollY < headerHeight);
  }
  lastKnownScrollY = currentScrollY;
}

function onScroll() {
  currentScrollY = window.pageYOffset;
  update();
}

function setMainContentAreaPosition() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");

  if (!header.classList.contains("open")) {
    const headerHeight = header.getBoundingClientRect()?.height;
    main.setAttribute("style", `top:${headerHeight}px`);

    const mainHeight = main.getBoundingClientRect()?.height;
    const footerMarginStr = getComputedStyle(footer).getPropertyValue(
      "--footer-top-margin"
    );
    const footerMargin = parseInt(footerMarginStr);
    footer.setAttribute(
      "style",
      `margin-top:${mainHeight + headerHeight + footerMargin}px`
    );
  }
}

function initNav() {
  eleHeader = document.getElementById(idOfHeader);
  stickyNavBarElement = document.getElementById(idOfStickyNav);

  // on load, set main top value based on header height
  setMainContentAreaPosition();

  document.addEventListener("scroll", onScroll, false);
  document.addEventListener("click", onClickCloseNav);
  window.addEventListener("resize", setMainContentAreaPosition);
}
window.onload = initNav;

var $window = $(window),
$document = $(document),
button = $('.make-an-appt__mobilebtn');

button.css({
opacity: 1
});

$window.on('scroll', function () {
if (($window.scrollTop() + $window.height()) == $document.height()) {
    console.log('hello if')
    button.stop(true).animate({
        opacity: 0
    }, 250);
} else {
    button.stop(true).animate({
        opacity: 1
    }, 250);
}
});
