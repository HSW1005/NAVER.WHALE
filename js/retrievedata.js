var showresult = "";

window.onload = function() {

  chrome.storage.local.get(null, function(items) {
    
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

  var element = document.getElementById("marqueehere");
  element.innerHTML = showresult;

  //마퀴 속도 
  if(element.length < 500) {
    element.style.cssText = '-webkit-animation-duration:80s; -moz-animation-duration:80s; -ms-animation-duration:80s; -o-animation-duration:80s; animation-duration:80s;';
  } else if(element.length < 1000) {
    element.style.cssText = '-webkit-animation-duration:100s; -moz-animation-duration:100s; -ms-animation-duration:100s; -o-animation-duration:100s; animation-duration:100s;';
  } else if(element.length < 1500) {
    element.style.cssText = '-webkit-animation-duration:130s; -moz-animation-duration:130s; -ms-animation-duration:130s; -o-animation-duration:130s; animation-duration:130s;';
  } else if(element.length < 2000) {
    element.style.cssText = '-webkit-animation-duration:150s; -moz-animation-duration:150s; -ms-animation-duration:150s; -o-animation-duration:150s; animation-duration:150s;';
  } else if(element.length < 2500) {
    element.style.cssText = '-webkit-animation-duration:170s; -moz-animation-duration:170s; -ms-animation-duration:170s; -o-animation-duration:170s; animation-duration:170s;';
  } else if(element.length < 3000) {
    element.style.cssText = '-webkit-animation-duration:200s; -moz-animation-duration:200s; -ms-animation-duration:200s; -o-animation-duration:200s; animation-duration:200s;';
  } else {
    element.style.cssText = '-webkit-animation-duration:300s; -moz-animation-duration:300s; -ms-animation-duration:300s; -o-animation-duration:300s; animation-duration:300s;';
  }
  
  }); 
}