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

  //마퀴 속도 조절 
  var slider = document.getElementById("myRange");

  chrome.storage.local.get('marquee', function(result) {
    if(typeof result.marquee == 'undefined') { //앱을 처음 설치한 경우 
      //default value 
    } else { //그렇지 않은 경우 - 이전 설정값 유지 
      slider.value = result.marquee.value; 
      var num = 501 - slider.value; 
      var text = '-webkit-animation-duration:' + num + 's; -moz-animation-duration:' + num + 's; -ms-animation-duration:' + num + 's; -o-animation-duration:' + num + 's; animation-duration:' + num + 's;';
      element.style.cssText = text;
    }   
  });
  
  slider.onchange = function() {
    var num = 501 - slider.value; 
    var text = '-webkit-animation-duration:' + num + 's; -moz-animation-duration:' + num + 's; -ms-animation-duration:' + num + 's; -o-animation-duration:' + num + 's; animation-duration:' + num + 's;';
    element.style.cssText = text;
    var speed = {value:slider.value}; 
    chrome.storage.local.set({marquee: speed}, function() {
      console.log('marquee speed set');
    });
  }

  }); 
}