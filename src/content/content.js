console.log("[Highlighter] Content script loaded");

document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);
  console.log("Selected text:", range.toString());
});
