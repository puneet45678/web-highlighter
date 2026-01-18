export function saveHighlightTemp(data){

    const key = "highlights";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push(data);
    localStorage.setItem(key, JSON.stringify(existing));

}

export function getHighlightsTemp() {
  return JSON.parse(localStorage.getItem("highlights") || "[]");
}