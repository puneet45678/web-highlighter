
import { applyHighlight } from "./highlight.js";

export function restoreHighlight(serialized) {
  console.log("Trying XPath:", serialized.start.xpath);

  const startNode = getNodeByXPath(serialized.start.xpath);
  const endNode = getNodeByXPath(serialized.end.xpath);

  console.log("Resolved startNode:", startNode);

  if (!startNode || !endNode) {
    return;
  }

  const range = document.createRange();
  range.setStart(startNode, serialized.start.offset);
  range.setEnd(endNode, serialized.end.offset);

  applyHighlight(range);
}


export function getNodeByXPath(xpath) {
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return result.singleNodeValue;
}
