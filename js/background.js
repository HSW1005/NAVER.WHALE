chrome.runtime.onMessage.addListener((msg, callback) => {
  switch(msg.action) {
    case 'openWindow':
      chrome.tabs.executeScript({
        code: 'var iframe = document.createElement("iframe"); iframe.src = chrome.runtime.getURL("window.html"); iframe.setAttribute("id", "show"); iframe.setAttribute("width", "100%"); iframe.setAttribute("height", "52px"); iframe.style.cssText="position: -webkit-sticky; position: sticky; top: 0; z-index:1000;display:block;"; var elementExists = !!document.getElementById("show"); if(elementExists) {} else {document.body.prepend(iframe)};'
      });
  
  }
});


chrome.runtime.onMessage.addListener((msg, callback) => {
  switch(msg.action) {
    case 'closeWindow':
        chrome.tabs.executeScript({
          code: 'var show = document.getElementById("show"); show.parentNode.removeChild(show);'
        });
  }
});



