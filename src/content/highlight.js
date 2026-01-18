export function createHighlightSpan() {
  const span = document.createElement("span");
  span.style.backgroundColor = "yellow";
  span.style.cursor = "pointer";
  span.className = "web-highlighter-span";
  return span;
}

export function applyHighlight(range) {
  const span = createHighlightSpan();
  console.log(span);
  try {
    range.surroundContents(span);
  } catch (err) {
    // fallback for complex selections
    const fragment = range.extractContents();
    span.appendChild(fragment);
    range.insertNode(span);
  }
}
