import gsap from "gsap";
import { extractGreensockOptionsFromElement } from "../setup/extractGreensockOptionsFromElement";

export const animateChildren = (element) => {
  const children = element.querySelectorAll(":scope > *");
  gsap.from(children, {
    ...extractGreensockOptionsFromElement(element),
    ease: "power4",
  });
};
