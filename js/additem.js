//title
var headlines_list = [];
var business_list = [];
var entertainment_list = [];
var health_list = [];
var science_list = [];
var sports_list = [];
var technology_list = []; 

//image
var headlines_image = [];
var business_image = [];
var entertainment_image = [];
var health_image = [];
var science_image = [];
var sports_image = [];
var technology_image = []; 

//description
var headlines_des = [];
var business_des = [];
var entertainment_des = [];
var health_des = [];
var science_des = [];
var sports_des = [];
var technology_des = []; 

//link
var headlines_url = [];
var business_url = [];
var entertainment_url = [];
var health_url = [];
var science_url = [];
var sports_url = [];
var technology_url = []; 

window.onload = function() {

    chrome.storage.local.get(null, function(items) {
      
      var allKeys = Object.keys(items);
      allKeys.forEach(function(key, index) {
        if(key == 'headlines') {
            for (i = 0; i < items.headlines.title.length; i++) {
                headlines_list.push(items.headlines.title[i]);
                if(items.headlines.urlToImage[i] == null) {
                  headlines_image.push("./png/codmon_whale_icon.png");
                } else {
                  headlines_image.push(items.headlines.urlToImage[i]);
                }
                headlines_des.push(items.headlines.description[i]); 
                headlines_url.push(items.headlines.link[i]);
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
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", headlines_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = headlines_des[i];
              des.href = headlines_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);

              headlines_items.appendChild(li);
            }
          
        }
        else if(key == 'business') {
          for (i = 0; i < items.business.title.length; i++) {
            business_list.push(items.business.title[i]);
            if(items.business.urlToImage[i] == null) {
              business_image.push("./png/codmon_whale_icon.png");
            } else {
              business_image.push(items.business.urlToImage[i]);
            }
            business_des.push(items.business.description[i]); 
            business_url.push(items.business.link[i]);
          }

          var business_items = document.getElementById("business_items"); 
    
          for(i = 0; i < business_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'business_item'+i);
              p.innerHTML = business_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", business_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = business_des[i];
              des.href = business_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              business_items.appendChild(li);
            }
        }
        else if(key == 'entertainment') {
          for (i = 0; i < items.entertainment.title.length; i++) {
            entertainment_list.push(items.entertainment.title[i]);
            if(items.entertainment.urlToImage[i] == null) {
              entertainment_image.push("./png/codmon_whale_icon.png");
            } else {
              entertainment_image.push(items.entertainment.urlToImage[i]);
            }
            entertainment_des.push(items.entertainment.description[i]); 
            entertainment_url.push(items.entertainment.link[i]);
          }

          var entertainment_items = document.getElementById("entertainment_items"); 
    
          for(i = 0; i < entertainment_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'entertainment_item'+i);
              p.innerHTML = entertainment_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", entertainment_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = entertainment_des[i];
              des.href = entertainment_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              entertainment_items.appendChild(li);
            }

        }
        else if(key == 'health') {
          for (i = 0; i < items.health.title.length; i++) {
            health_list.push(items.health.title[i]);
            if(items.health.urlToImage[i] == null) {
              health_image.push("./png/codmon_whale_icon.png");
            } else {
              health_image.push(items.health.urlToImage[i]);
            }
            health_des.push(items.health.description[i]); 
            health_url.push(items.health.link[i]);
          }

          var health_items = document.getElementById("health_items"); 
    
          for(i = 0; i < health_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'health_item'+i);
              p.innerHTML = health_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", health_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = health_des[i];
              des.href = health_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              health_items.appendChild(li);
            }
        }
        else if(key == 'science') {
          for (i = 0; i < items.science.title.length; i++) {
            science_list.push(items.science.title[i]);
            if(items.science.urlToImage[i] == null) {
              science_image.push("./png/codmon_whale_icon.png");
            } else {
              science_image.push(items.science.urlToImage[i]);
            }
            science_des.push(items.science.description[i]); 
            science_url.push(items.science.link[i]);
          }
          var science_items = document.getElementById("science_items"); 
    
          for(i = 0; i < science_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'science_item'+i);
              p.innerHTML = science_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", science_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = science_des[i];
              des.href = science_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              science_items.appendChild(li);
            }
        }
        else if(key == 'sports') {
          for (i = 0; i < items.sports.title.length; i++) {
            sports_list.push(items.sports.title[i]);
            if(items.sports.urlToImage[i] == null) {
              sports_image.push("./png/codmon_whale_icon.png");
            } else {
              sports_image.push(items.sports.urlToImage[i]);
            }
            sports_des.push(items.sports.description[i]); 
            sports_url.push(items.sports.link[i]);
          }
          var sports_items = document.getElementById("sports_items"); 
    
          for(i = 0; i < sports_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'sports_item'+i);
              p.innerHTML = sports_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", sports_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = sports_des[i];
              des.href = sports_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              sports_items.appendChild(li);
            }
        }
        else if(key == 'technology') {
          for (i = 0; i < items.technology.title.length; i++) {
            technology_list.push(items.technology.title[i]);
            if(items.technology.urlToImage[i] == null) {
              technology_image.push("./png/codmon_whale_icon.png");
            } else {
              technology_image.push(items.technology.urlToImage[i]);
            }
            technology_des.push(items.technology.description[i]); 
            technology_url.push(items.technology.link[i]);
          }
          var technology_items = document.getElementById("technology_items"); 
    
          for(i = 0; i < technology_list.length; i++) {
              var li = document.createElement("li");

              var div = document.createElement("div");
              div.className = "collapsible-header";
              var p = document.createElement("p");
              p.setAttribute("id", 'technology_item'+i);
              p.innerHTML = technology_list[i]; 
              p.style.fontSize = "15px";

              var div2 = document.createElement("div");
              div2.className = "collapsible-body";
              var img = document.createElement("img");
              img.setAttribute("src", technology_image[i]);
              img.style.width = '100%';
              var des = document.createElement("a");
              des.innerHTML = technology_des[i];
              des.href = technology_url[i];
              des.style.fontSize="12px";

              div.appendChild(p);
              div2.appendChild(img);
              div2.appendChild(des);
              li.appendChild(div);
              li.appendChild(div2);
              
              technology_items.appendChild(li);
            }
        }
        });
    });
}

