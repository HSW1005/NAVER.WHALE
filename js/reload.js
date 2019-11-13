var updateNews = function() {
    chrome.storage.local.get(null, function(items) {
      
        var allKeys = Object.keys(items);
        allKeys.forEach(function(key, index) {
          if(key == 'headlines') {
            var client = new HttpClient();

            client.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=efb433bbf3df46d69b0246e526b8a92a", function(response) {
                var json = JSON.parse(response);
    
                var headlines = {title : [], link : [], description: [], urlToImage: []};
    
                for(let i = 0; i < json.articles.length; i++) {
                    headlines.title.push(json.articles[i].title);
                    headlines.link.push(json.articles[i].url); 
                    headlines.description.push(json.articles[i].description);
                    headlines.urlToImage.push(json.articles[i].urlToImage); 
                }
    
                //store into chrome.storage
                chrome.storage.local.set({headlines: headlines}, function() {
                    console.log('headlines updated');
                });
            });
            
          }
          else if(key == 'business') {
            var client = new HttpClient();

            client.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=efb433bbf3df46d69b0246e526b8a92a", function(response) {
                var json_business = JSON.parse(response);
    
                var business = {title : [], link : [], description: [], urlToImage: []};
    
                for(let i = 0; i < json_business.articles.length; i++) {
                    business.title.push(json_business.articles[i].title);
                    business.link.push(json_business.articles[i].url); 
                    business.description.push(json_business.articles[i].description);
                    business.urlToImage.push(json_business.articles[i].urlToImage); 
                }
    
                //store into chrome.storage
                chrome.storage.local.set({business: business}, function() {
                    console.log('business updated');
                });
            }); 
            
          }
          else if(key == 'entertainment') {
            var client = new HttpClient();

            client.get("https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=efb433bbf3df46d69b0246e526b8a92a", function(response) {
                var json_entertainment = JSON.parse(response);
    
                var entertainment = {title : [], link : [], description: [], urlToImage: []};
    
                for(let i = 0; i < json_entertainment.articles.length; i++) {
                    entertainment.title.push(json_entertainment.articles[i].title);
                    entertainment.link.push(json_entertainment.articles[i].url); 
                    entertainment.description.push(json_entertainment.articles[i].description);
                    entertainment.urlToImage.push(json_entertainment.articles[i].urlToImage); 
                }
    
                //store into chrome.storage
                chrome.storage.local.set({entertainment: entertainment}, function() {
                    console.log('entertainment updated');
                });
            });
  
          }
          else if(key == 'sports') {
            var client = new HttpClient();

            client.get("https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=efb433bbf3df46d69b0246e526b8a92a", function(response) {
                var json_sports = JSON.parse(response);
    
                var sports = {title : [], link : [], description: [], urlToImage: []};
    
                for(let i = 0; i < json_sports.articles.length; i++) {
                    sports.title.push(json_sports.articles[i].title);
                    sports.link.push(json_sports.articles[i].url); 
                    sports.description.push(json_sports.articles[i].description);
                    sports.urlToImage.push(json_sports.articles[i].urlToImage); 
                }
    
                //store into chrome.storage
                chrome.storage.local.set({sports: sports}, function() {
                    console.log('sports updated');
                });
            });
            
          }
          else if(key == 'technology') {
            var client = new HttpClient();

            client.get("https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=efb433bbf3df46d69b0246e526b8a92a", function(response) {
                var json_technology = JSON.parse(response);
    
                var technology = {title : [], link : [], description: [], urlToImage: []};
    
                for(let i = 0; i < json_technology.articles.length; i++) {
                    technology.title.push(json_technology.articles[i].title);
                    technology.link.push(json_technology.articles[i].url); 
                    technology.description.push(json_technology.articles[i].description);
                    technology.urlToImage.push(json_technology.articles[i].urlToImage); 
                }
    
                //store into chrome.storage
                chrome.storage.local.set({technology: technology}, function() {
                    console.log('technology updated');
                });
            });
            
          }
        });
    });
}

setInterval(updateNews, 15 * 60 * 1000) //update every 15 minutes
