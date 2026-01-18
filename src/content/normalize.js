export function normalizeRangeToText(range) {
  let startContainer = range.startContainer;
  let startOffset = range.startOffset;
  let endContainer = range.endContainer;
  let endOffset = range.endOffset;

  // Normalize start
  while (startContainer.nodeType === Node.ELEMENT_NODE && startContainer.childNodes[startOffset]) {
    startContainer = startContainer.childNodes[startOffset];
    startOffset = 0;
  }
  
  // If we ended on an element, find its first text node
  if (startContainer.nodeType === Node.ELEMENT_NODE) {
    const textNode = getFirstTextNode(startContainer);
    if (textNode) {
      startContainer = textNode;
      startOffset = 0;
    }
  }

  // Normalize end
  while (endContainer.nodeType === Node.ELEMENT_NODE && endOffset > 0 && endContainer.childNodes[endOffset - 1]) {
    endContainer = endContainer.childNodes[endOffset - 1];
    endOffset = endContainer.nodeType === Node.TEXT_NODE ? endContainer.textContent.length : endContainer.childNodes.length;
  }
  
  // If we ended on an element, find its last text node
  if (endContainer.nodeType === Node.ELEMENT_NODE) {
    const textNode = getLastTextNode(endContainer);
    if (textNode) {
      endContainer = textNode;
      endOffset = textNode.textContent.length;
    }
  }

  return { startContainer, startOffset, endContainer, endOffset };
}

function getFirstTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) return node;
  for (let child of node.childNodes) {
    const textNode = getFirstTextNode(child);
    if (textNode) return textNode;
  }
  return null;
}

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) return node;
  for (let i = node.childNodes.length - 1; i >= 0; i--) {
    const textNode = getLastTextNode(node.childNodes[i]);
    if (textNode) return textNode;
  }
  return null;
}