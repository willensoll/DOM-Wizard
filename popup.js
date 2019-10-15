

removeElement.onclick = function() {
  chrome.tabs.executeScript(null, {file: "scripts/jquery-3.4.1.min.js"}, function() {
    chrome.tabs.executeScript({
      file: 'removedomelement.js'
    })
  })
  };