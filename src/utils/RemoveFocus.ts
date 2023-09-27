export const removeFocus = () => {
  const activeElement = document.activeElement;

  if (
    activeElement instanceof HTMLElement &&
    activeElement.tagName === "INPUT"
  ) {
    return;
  }
  if (activeElement instanceof HTMLElement) {
    activeElement.blur();
  }
};
