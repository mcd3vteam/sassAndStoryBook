import { observe } from "selector-observer";

observe(".child-categories__cta", {
  add(element) {
    const btnLength = element.querySelectorAll(".child-cta-btn").length;
    const btnHide = element.querySelectorAll(
      ".child-cta-btn:nth-of-type(n+10)"
    );
    const seeMore = element.querySelector(".see-more");

    if (btnLength > 9 && seeMore) {
      seeMore.classList.remove("hidden");
      for (const item of btnHide) {
        item.classList.add("hidden");
      }
    }
  },
});

observe(".see-more", {
  add(element) {
    const btn = element.parentElement.querySelectorAll(".child-cta-btn");

    element.addEventListener("click", (event) => {
      for (const item of btn) {
        if (item.classList.contains("hidden")) {
          item.classList.remove("hidden");
          element.classList.add("hidden");
        }
      }
    });
  },
});
