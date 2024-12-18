import { KarouselOptions } from "./types";

export const DefaultOptions = {
  autoplay: false,
  autoplaySpeed: 3000,
  buttons: false,
  classes: {},
  draggable: false,
  indicators: false,
  responsive: [],
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 300,
};

export const applyDefaults = (
  options: Partial<KarouselOptions>
): KarouselOptions => {
  const {
    autoplay = DefaultOptions.autoplay,
    autoplaySpeed = DefaultOptions.autoplaySpeed,
    buttons = DefaultOptions.buttons,
    classes = DefaultOptions.classes,
    draggable = DefaultOptions.draggable,
    indicators = DefaultOptions.draggable,
    responsive = DefaultOptions.responsive,
    slidesToScroll = DefaultOptions.slidesToScroll,
    slidesToShow = DefaultOptions.slidesToShow,
    speed = DefaultOptions.speed,
  } = options;

  return {
    autoplay,
    autoplaySpeed,
    buttons,
    classes,
    draggable,
    indicators,
    responsive,
    slidesToScroll,
    slidesToShow,
    speed,
  };
};

export const DefaultClasses = {
  karouselContainer: "karousel-container",
  gridContainer: "grid-container",
  carousel: "karousel-slider",
  track: "karousel-track",
  slide: "karousel-slide",
  slideInactive: "karousel-slide-inactive",
  controls: "karousel-controls",
  button: "karousel-btn",
  buttonNext: "karousel-btn-next",
  buttonPrevious: "karousel-btn-prev",
  indicators: "karousel-indicators",
  indicator: "karousel-indicator",
  indicatorActive: "karousel-indicator-active",
};
