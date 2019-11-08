var showresult = "";

window.onload = function() {

  chrome.storage.sync.get(null, function(items) {
    
    var allKeys = Object.keys(items);
    allKeys.forEach(function(key, index) {
      if(key == 'headlines') {
        for (i = 0; i < items.headlines.title.length; i++) {
          showresult += items.headlines.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'business') {
        for (i = 0; i < items.business.title.length; i++) {
          showresult += items.business.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'entertainment') {
        for (i = 0; i < items.entertainment.title.length; i++) {
          showresult += items.entertainment.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'health') {
        for (i = 0; i < items.health.title.length; i++) {
          showresult += items.health.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'science') {
        for (i = 0; i < items.science.title.length; i++) {
          showresult += items.science.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'sports') {
        for (i = 0; i < items.sports.title.length; i++) {
          showresult += items.sports.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
      else if(key == 'technology') {
        for (i = 0; i < items.technology.title.length; i++) {
          showresult += items.technology.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }
      }
  });

  var element = document.getElementById("here");
  element.innerHTML = showresult;
  });
}