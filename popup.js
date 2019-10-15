

removeElement.onclick = function() {
    chrome.tabs.executeScript({
      file: 'removedomelement.js'
    })
  };