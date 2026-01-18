# Persistent Web Highlighter

A Chrome extension that allows users to highlight text on any webpage and automatically restores highlights when revisiting the page.

## Tech
- Chrome Extension (Manifest V3)
- JavaScript
- DOM Range API
- Chrome Storage API

## model
{
  "id": "uuid",
  "url": "https://example.com/article",
  "text": "Dependency Injection is important",
  "start": {
    "xpath": "/html/body/div[2]/article/p[4]/text()[1]",
    "offset": 12
  },
  "end": {
    "xpath": "/html/body/div[2]/article/p[4]/text()[1]",
    "offset": 46
  },
  "context": {
    "prefix": "In modern backend systems ",
    "suffix": " for testable architecture"
  },
  "createdAt": 1700000000000
}

