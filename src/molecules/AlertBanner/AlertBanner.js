import { observe } from "selector-observer";

const key = "ucsdh-dismissed-alert";
const setDismissedAlerts = (id) => {
  let dismissed = sessionStorage.getItem(key);
  dismissed = dismissed ? `${dismissed},${id}` : id;
  sessionStorage.setItem(key, dismissed);
};

function setMainContentAreaPosition() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");

  const headerHeight = header.getBoundingClientRect()?.height;
  main.setAttribute("style", `top:${headerHeight}px`);

  const mainHeight = main.getBoundingClientRect()?.height;
  console.log("footer new js", { footer, mainHeight });

  const footerMarginStr = getComputedStyle(footer).getPropertyValue(
    "--footer-top-margin"
  );
  const footerMargin = parseInt(footerMarginStr);
  footer.setAttribute(
    "style",
    `margin-top:${mainHeight + headerHeight + footerMargin}px`
  );
}

observe(".alert-banner", {
  add(element) {
    const dismiss = element.querySelector(".alert-banner__dismiss");
    dismiss.addEventListener("click", () => {
      const { dataset } = element;
      const id = dataset.alertId;
      setDismissedAlerts(id);
      element.classList.toggle("dismissed");

      // when alert banner is closed - set main top value based on header height
      setMainContentAreaPosition();
    });
  },
});
