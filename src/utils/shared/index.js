import { setupAnimations } from "./animation/setup";
import { initModal } from "./Modal";

document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    window.ucsdh = { };
  }
});

setupAnimations();
initModal();
