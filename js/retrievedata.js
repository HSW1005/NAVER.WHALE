var showresult = new Array(['']);
var showresult_bus ="";




window.onload = function() {
  //sidebar
  chrome.storage.sync.get('headlines', function(result) { //retrieve data from chrome.storage
    var element = new Array();
      for(let i =0; i<20; i++) {
      element[i] = document.getElementById(i);
      } 

    for (let i = 0; i < result.headlines.title.length; i++) {
      showresult[i] = result.headlines.title[i];
    }
      for(let i=0; i<20;i++) {
      element[i].innerHTML = showresult[i];
    }
  });
  chrome.storage.sync.get('headlines', function(result) { //retrieve data from chrome.storage

    var element_bus = document.getElementById("here2");

        for (let i = 0; i < result.business.title.length; i++) {
          showresult_bus += result.business.title[i] + "&nbsp&nbsp&nbsp&nbsp  |   &nbsp&nbsp&nbsp&nbsp";
        }

        element_bus.innerHTML = showresult_bus;
  });

}

