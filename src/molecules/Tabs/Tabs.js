import { observe } from "selector-observer";

observe(".tabs__item-button", {
  add(element) {
    // deselect all tab items
    element.addEventListener("click", ({ target }) => {
      if (target?.closest(".tabs__item")?.classList?.contains("selected")) {
        target?.closest(".tabs__items")?.classList?.toggle("active");
      } else {
        target
          ?.closest(".tabs__items")
          ?.querySelector(".tabs__item.selected")
          ?.classList?.toggle("selected");

        // select clicked tab item
        target?.closest(".tabs__item")?.classList?.toggle("selected");
        target?.closest(".tabs__items")?.classList?.remove("active");
      }
      const appHeight = document.getElementById("main")?.scrollHeight;
      const footerFrame = window.parent.document.getElementById("footer");
      const tabContainer = document.querySelector(".container.tabs");

      if (footerFrame) {
        let footerHeight = footerFrame?.scrollHeight;
        let tabContainerHeight = tabContainer?.scrollHeight;
        if (footerHeight && appHeight)
          footerHeight += appHeight + tabContainerHeight;
        footerFrame.style.marginTop = `${footerHeight}px`;
      }
    });

    // deselect all tab contents
    element.addEventListener("click", ({ target }) => {
      target
        ?.closest(".tabs")
        ?.querySelector(".tabs__content.selected")
        ?.classList?.toggle("selected");

      // select clicked tab content
      target
        ?.closest(".tabs")
        ?.querySelector(
          `.tabs__content[data-index="${
            target.closest(".tabs__item")?.dataset?.index
          }"]`
        )
        ?.classList?.toggle("selected");
    });
  },
});
