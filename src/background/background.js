chrome.runtime.onInstalled.addListener(() => {
  console.log("[Highlighter] Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SAVE_HIGHLIGHT") {
    console.log("Saving highlight", message.payload);
  }
});
