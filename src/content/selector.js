import { normalizeRangeToText } from "./normalize";

export function getXPath(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentNode;
        const textNodes = Array.from(parent.childNodes).filter(
            n => n.nodeType === Node.TEXT_NODE
        );
        const index = textNodes.indexOf(node) + 1;
        return getXPath(parent) + `/text()[${index}]`;
    }

    if (node === document.body) {
        return "/html/body";
    }

    const index = Array.from(node.parentNode.children)
        .filter(n => n.tagName === node.tagName)
        .indexOf(node) + 1;

    return getXPath(node.parentNode) + "/" + node.tagName.toLowerCase() + `[${index}]`;
}

export function getContext(textNode, startOffset, endOffset, maxLength = 30) {
  const text = textNode.textContent;

  return {
    prefix: text.substring(
      Math.max(0, startOffset - maxLength),
      startOffset
    ),
    suffix: text.substring(
      endOffset,
      Math.min(text.length, endOffset + maxLength)
    )
  };
}



export function serializeRange(range) {
  const normalized = normalizeRangeToText(range);

  const startNode = normalized.startContainer;
  const endNode = normalized.endContainer;

  return {
    text: range.toString(),
    start: {
      xpath: getXPath(startNode),
      offset: normalized.startOffset
    },
    end: {
      xpath: getXPath(endNode),
      offset: normalized.endOffset
    },
    context: getContext(
      startNode,
      normalized.startOffset,
      normalized.endOffset
    )
  };
}