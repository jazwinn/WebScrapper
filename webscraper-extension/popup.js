document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('scrape');

  {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tabId = tabs[0].id;

      chrome.scripting.executeScript(
        {
          target: { tabId },
          files: ["content.js"]
        },
        () => {
          // Send message to content script
          chrome.tabs.sendMessage(tabId, { action: 'scrape' }, response => {
            if (response?.data) {
              const blob = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
              const filename = tabs[0].url.replace(/https?:\/\//, '').replace(/[^\w]/g, '_') + '.json';
              chrome.downloads.download({ url: URL.createObjectURL(blob), filename });
              setTimeout(() => window.close(), 500);
            }
          });
        }
      );
    });

    
  }

});