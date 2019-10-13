let changeColor = document.getElementById('changeColour');

/* chrome.storage.sync.get('color', function(data){
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
}); */

removeElement.onclick = function(element) {
  chrome.tabs.executeScript({
    file: 'removedomelement.js'
  })
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };