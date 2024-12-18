export const splitText = (text) =>
  text
    .split(" ")
    .map((word) => `<span>${word}</span>`)
    .join("");
