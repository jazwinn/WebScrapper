# 🌐 WebScraper

A lightweight, generic web scraper built with **Node.js** and **Cheerio** that converts the full HTML structure of any website into a clean, readable JSON file.  
It’s perfect for exploring site structures, scraping content, or building data extraction tools.

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

