export function setupViewportObserver(element, callback) {
  let wasCalled = false;

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

      if (entry.isIntersecting && !wasCalled) {
        wasCalled = true;
        callback();
      }
  }, {});

  if (element) {
    observer.observe(element);
  }
  return observer;
}