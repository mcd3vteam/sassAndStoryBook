import { observe } from "selector-observer";

function handleClick(event) {
  event.preventDefault();
  const sidebarMenu = document.querySelector(".sidebarMenu");
  sidebarMenu.classList.toggle("active");
}

observe(".sidebarMenu__header", {
  add(el) {
    el.addEventListener("click", handleClick);
  },
  remove(el) {
    el.removeEventListener("click", handleClick);
  },
});
