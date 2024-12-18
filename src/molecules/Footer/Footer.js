import { observe } from "selector-observer";

function handleClick(event) {
  event.currentTarget.classList.toggle("active");
  var content = event.currentTarget.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

observe(".collapsible", {
  add(el) {
    el.addEventListener("click", handleClick);
  },
  remove(el) {
    el.removeEventListener("click", handleClick);
  },
});
