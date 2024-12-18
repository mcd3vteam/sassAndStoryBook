import { observe } from "selector-observer";

export const initModal = () => {
  observe(".modal", {
    add(element) {
      // const content = element.querySelector('.modal__content');
      const overlay = element.querySelector(".modal__overlay");
      const close = element.querySelector(".modal__close");
      const video = element.querySelector(".modal__video");
      const trigger = document.querySelector(`[data-modal="${element.id}"]`);

      const openModal = () => {
        element.classList.add("modal--open");
        const videoSrc = element.dataset.modalVideoSrc;
        if (video && videoSrc) video.src = videoSrc;
      };

      const closeModal = () => {
        element.classList.remove("modal--open");
        if (video) video.src = "";
      };

      close.addEventListener("click", closeModal);
      trigger.addEventListener("click", openModal);
      overlay.addEventListener("click", closeModal);
    },
  });
};
