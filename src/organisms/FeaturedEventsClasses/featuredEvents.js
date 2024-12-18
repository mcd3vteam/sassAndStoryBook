export const setFeaturedEventsArgs = (id, { cards, disableAnimation }) => {
  //    .cshtml script for SanDiegoHealth.Web
  //   <script>document.addEventListener("readystatechange", () => {
  //     if (document.readyState === "interactive") {
  window.ucsdh[`featuredevents_${id}`] = {
    disableAnimation,
    cards,
  };
  //     }
  //   });</script>
};
