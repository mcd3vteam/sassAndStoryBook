export const setFeaturedItemsArgs = (id, { disableAnimation, cards }) => {
  //    .cshtml script for SanDiegoHealth.Web
  //   <script>document.addEventListener("readystatechange", () => {
  //     if (document.readyState === "interactive") {
  window.ucsdh[`featureditems_${id}`] = {
    disableAnimation,
    cards,
  };
  //     }
  //   });</script>
};
