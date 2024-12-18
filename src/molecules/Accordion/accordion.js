import { observe } from "selector-observer";

observe(".accordion-btn", {
  add(element) {
    const accordionInfo =
      element.parentElement.querySelector(".accordion-info");

    const accordionBtn = element.parentElement.querySelector(".accordion-btn");

    element.addEventListener("click", () => {
      if (accordionInfo.classList.contains("hidden")) {
        accordionInfo.classList.remove("hidden");
        accordionBtn.classList.add("open");
        element.setAttribute("aria-expanded", true);
      } else if (!accordionInfo.classList.contains("hidden")) {
        accordionInfo.classList.add("hidden");
        accordionBtn.classList.remove("open");
        element.setAttribute("aria-expanded", false);
      }
      const appHeight = document.getElementById("main")?.scrollHeight;
      const footerFrame = window.parent.document.getElementById("footer");
      if (footerFrame) {
        let footerHeight = footerFrame?.scrollHeight;

        if (footerHeight && appHeight) footerHeight += appHeight;
        footerFrame.style.marginTop = `${footerHeight}px`;
      }
    });
  },
});
