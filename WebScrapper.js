import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { URL } from 'url'; 


function ElementToJson($, element){
  const node = $(element);
  const tag = node[0]?.tagName;

  if (node[0]?.type === 'text') {
    const text = node.text().trim();
    return text ? text : null;
  }

  const json = { tag };

  const attrs = node.attr();
  if (attrs && Object.keys(attrs).length > 0) {
    json.attributes = attrs;
  }

  const children = node.contents().map((i, child) => ElementToJson($, child)).get();
  const filtered = children.filter(c => c !== null);

  if (filtered.length > 0) {
    json.children = filtered;
  }

  return json;
}

async function ScrapeURL(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  let result = [];
  $("html").each((val, element) => {
    result.push(ElementToJson($, element));
  });

  const urlObject = new URL(url);
  const domainName = urlObject.hostname.replace(/\./g, '_');
  const fileName = `${domainName}.json`;

  writeFileSync(fileName, JSON.stringify(result, null, 2));
  console.log(`Site scraped successfully and saved to ${fileName}`);
}

const url = process.argv[2] || "https://webscraper.io/test-sites/e-commerce/allinone";
if(url.startsWith("http")){
  await ScrapeURL(url);  
}
else{
  console.log("Url not Valid/Missing")
}