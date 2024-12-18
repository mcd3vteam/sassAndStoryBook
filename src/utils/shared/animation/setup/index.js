import { observe } from "selector-observer";
import { animateChildren } from "../handlers/animateChildren";
import { animateDefault } from "../handlers/animateDefault";
import { animateLetters } from "../handlers/animateLetters";
import { animateImageCover } from "../handlers/animateImageCover";
import { setupViewportObserver } from "./setupViewportObserver";

const animationTypeHandlers = {
  children: animateChildren,
  letters: animateLetters,
  imagecover: animateImageCover,
};

export const setupAnimations = () => {
  const init = () => {
    observe("[data-animate]", {
      add(element) {
        setupViewportObserver(element, () => {
          const options = { object: "withdata" };
          const { dataset } = element;
          // Default [data-animate] opacity is 0 in order to
          // prevent flicker before animation begins.
          element.style.visibility = "visible";
          const mq1 = window?.matchMedia("(min-width: 1200px)");
          if (mq1.matches) {
            if (!dataset.animateDisabled) {
              const handler =
                animationTypeHandlers[dataset.animate] ?? animateDefault;
              handler(element, options);
            }
          }
          // prevent green image cover from hiding image when screen size changes from mobile to desktop
          else if (dataset.animate === "imagecover") {
            element.classList.add("disabled-cover");
          }
        });
      },
    });
  };

  // Ensures DOM is properly loaded.
  if (window.UCSD_ANIMATIONS_READY) return init();
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      window.UCSD_ANIMATIONS_READY = true;
      init();
    }
  });
};
