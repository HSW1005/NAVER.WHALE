//기사를 꺼내와서 array에 저장
var headlines_list = [];
var business_list = [];
var entertainment_list = [];
var health_list = [];
var science_list = [];
var sports_list = [];
var technology_list = []; 

window.onload = function() {

    chrome.storage.local.get(null, function(items) {
      
      var allKeys = Object.keys(items);
      allKeys.forEach(function(key, index) {
        if(key == 'headlines') {
            for (i = 0; i < items.headlines.title.length; i++) {
                headlines_list.push(items.headlines.title[i]);
                console.log("items added to array");
            }

            var headlines_items = document.getElementById("headlines_items"); 
    
            for(i = 0; i < headlines_list.length; i++) {
            var li = document.createElement("li");

            var div = document.createElement("div");
            div.className = "collapsible-header";
            var p = document.createElement("p");
            p.setAttribute("id", 'headlines_item'+i);
            p.innerHTML = headlines_list[i]; 

            var div2 = document.createElement("div");
            div2.className = "collapsible-body";
            var span = document.createElement("span");
            span.innerHTML = "span"; 
            
            div.appendChild(p);
            div2.appendChild(span); 
            li.appendChild(div);
            li.appendChild(div2);
            //console.log("test");
            //li.innerHTML = "test";
            headlines_items.appendChild(li);
            }
          
        }
        else if(key == 'business') {
          for (i = 0; i < items.business.title.length; i++) {
            business_list.push(items.business.title[i]);
          }
        }
        else if(key == 'entertainment') {
          for (i = 0; i < items.entertainment.title.length; i++) {
            entertainment_list.push(items.entertainment.title[i]);
          }
        }
        else if(key == 'health') {
          for (i = 0; i < items.health.title.length; i++) {
            health_list.push(items.health.title[i]);
          }
        }
        else if(key == 'science') {
          for (i = 0; i < items.science.title.length; i++) {
            science_list.push(items.science.title[i]);
          }
        }
        else if(key == 'sports') {
          for (i = 0; i < items.sports.title.length; i++) {
            sports_list.push(items.sports.title[i]);
          }
        }
        else if(key == 'technology') {
          for (i = 0; i < items.technology.title.length; i++) {
            technology_list.push(items.technology.title[i]);
          }
        }
        });
    });

}

