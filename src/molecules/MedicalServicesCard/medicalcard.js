import { observe } from "selector-observer";

observe(".medical-services-card__button", {
  add(element) {
    const cardInfo =
      element.parentElement.parentElement.querySelector(".card-info");

    if (!cardInfo) return;

    element.addEventListener("click", () => {
      console.warn("medical services click");
      if (cardInfo.classList.contains("hidden")) {
        cardInfo.classList.remove("hidden");
        element.setAttribute("aria-expanded", "true");
      } else {
        cardInfo.classList.add("hidden");
        element.setAttribute("aria-expanded", "false");
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
