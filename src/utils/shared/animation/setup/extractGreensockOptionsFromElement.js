export const extractGreensockOptionsFromElement = (element, defaultValues) => {
  const { dataset } = element;
  const extract = (attribute, defaultValue) => {
    if (attribute === undefined) return;
    if (attribute === "true") return defaultValue;
    return Number(attribute);
  };

  return {
    delay: extract(dataset.animateDelay, defaultValues?.delay),
    duration: extract(dataset.animateDuration, defaultValues?.duration),
    opacity: extract(dataset.animateOpacity, defaultValues?.opacity),
    stagger: extract(dataset.animateStagger, defaultValues?.stagger),
    x: extract(dataset.animateX, defaultValues?.x),
    y: extract(dataset.animateY, defaultValues?.y),
    yPercent: extract(dataset.animateYpercent, defaultValues?.yPercent),
    ease: extract(dataset.ease, defaultValues?.ease),
  };
};
