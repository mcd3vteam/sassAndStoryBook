export const setHeroCarouselItemsArgs = (id, { disableAnimation, cards }) => {
  window.ucsdh[`heroCarouselItems_${id}`] = {
    disableAnimation,
    cards,
  };
};
