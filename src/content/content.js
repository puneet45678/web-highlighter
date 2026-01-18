import { applyHighlight } from "./highlight.js";

import { serializeRange } from "./selector.js";
import { restoreHighlight } from "./restore.js";
import { saveHighlightTemp, getHighlightsTemp } from "./storage-temp.js";


console.log("[Highlighter] Restoring highlights");

const highlights = getHighlightsTemp();
console.log("Stored highlights:", highlights);

highlights.forEach(restoreHighlight);


document.addEventListener("mouseup", () => {
  debugger;
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);
  const text = range.toString().trim();
  if (!text) return;

  applyHighlight(range);
  const serialized = serializeRange(range);
  saveHighlightTemp(serialized);
  console.log("Serialized highlight:", serialized);

  selection.removeAllRanges();
});


