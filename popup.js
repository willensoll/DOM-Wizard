removeElement.onclick = function() {
    chrome.tabs.executeScript({
      file: 'removedomelement.js'
    })
    chrome.tabs.insertCSS(undefined, {file: "snackbar.css"}, function () { console.log('inserted')})
    window.close()
};