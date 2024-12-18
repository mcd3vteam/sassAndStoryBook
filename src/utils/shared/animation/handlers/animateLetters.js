import gsap from "gsap";
import { extractGreensockOptionsFromElement } from "../setup/extractGreensockOptionsFromElement";

export const animateLetters = (element) => {
  element.innerHTML = element.textContent
    .split("")
    .map((letter) =>
      letter !== ""
        ? `<span style="display:inline-block">${letter}</span>`
        : letter
    )
    .join("");

  const letters = element.querySelectorAll("span");

  gsap.from(letters, {
    ...extractGreensockOptionsFromElement(element, { duration: 2 }),
    ease: "power4",
  });
};
