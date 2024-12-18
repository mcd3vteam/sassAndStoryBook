import gsap from "gsap";
import { extractGreensockOptionsFromElement } from "../setup/extractGreensockOptionsFromElement";

export const animateImageCover = (element) => {
  const tl = gsap.timeline({
    defaults: {
      duration: 1.0,
      ease: "expo.inOut",
    },
  });
  tl.to(element, {
    height: 0,
    ease: "power4.inOut",
    ...extractGreensockOptionsFromElement(element),
  });
};
