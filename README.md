# 🌐 WebScraper

A lightweight, generic web scraper built with **Node.js** and **Cheerio** that converts the full HTML structure of any website into a clean, readable JSON file.  
It’s perfect for exploring site structures, scraping content, or building data extraction tools.

Download the WebScraper Google Extension [here](https://chromewebstore.google.com/detail/kiongcibmjjoieihobncoiecdmodhnmn?utm_source=item-share-cb)

## 🧩 Branch Overview

| Branch | Description |
|---------|--------------|
| **main** | The **Node.js CLI application** version — runs locally via the command line and saves site structures as JSON. |
| **Web-Extension** | The **Chrome browser extension** version — scrape live websites directly from your browser. |

To explore the browser version, switch to the **Web-Extension** branch:
```bash
git checkout Web-Extension
```

## Features
- Scrapes **all HTML elements** recursively
- Saves structured data into `<domain>.json`
- Works for **any public website**

## Requirements
- **Node.js** version 18 or higher  

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/webscraper.git
   cd webscraper
2. Initialize the project
   ```bash
   npm init -y
3. Install Dependencies
   ```bash
   npm install cheerio

## Usage
  ```bash
  #node webscrapper.js <url>
  node webscrapper.js https://webscraper.io/test-sites/e-commerce/allinone

