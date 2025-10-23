function ElementToJson(element){
  const obj = {tag: element.tagName?.toLowerCase()};

  if(element.attributes?.length){
  obj.attributes = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      obj.attributes[attr.name] = attr.value;
    }
  }

  const children = [];
  element.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      if (text) children.push(text);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (!['script', 'style', 'noscript'].includes(node.tagName.toLowerCase())) {
        children.push(ElementToJson(node));
      }
    }
  });

  if(children.length > 0){
    obj.children = children;
  }

  return obj;
}


chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg.action === 'scrape') {
    const json = ElementToJson(document.documentElement);
    sendResponse({ data: json });
  }
  return true; // Keep the message channel open for async
});
