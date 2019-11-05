var showresult = "";

chrome.storage.sync.get('headlines', function(result) { //retrieve data from chrome.storage
    window.onload = function () {

        var element = document.getElementById("here");
    
        for (i = 0; i < result.headlines.title.length; i++) {
          showresult += result.headlines.title[i] + "  |  ";
        }
    
        element.innerText = showresult;
    };
});


