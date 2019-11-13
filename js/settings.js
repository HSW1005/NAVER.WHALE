//variables
var headlines_settings = document.getElementById("headlines_settings");
var business_settings = document.getElementById("business_settings");
var entertainment_settings = document.getElementById("entertainment_settings");
var sports_settings = document.getElementById("sports_settings");
var technology_settings = document.getElementById("technology_settings");

chrome.storage.local.get(null, function(items) {
      
    var allKeys = Object.keys(items);
    allKeys.forEach(function(key, index) {
        if(key == "user_headlines") {
            if(items.user_headlines.value == 1) { 
                headlines_settings.checked = true;
            } else {
                headlines_settings.checked = false;
            }
        } else if(key == "user_business") {
            if(items.user_business.value == 1) { 
                business_settings.checked = true;
            } else {
                business_settings.checked = false;
            }
        } else if(key == "user_entertainment") {
            if(items.user_entertainment.value == 1) { 
                entertainment_settings.checked = true;
            } else {
                entertainment_settings.checked = false;
            }
        } else if(key == "user_sports") {
            if(items.user_sports.value == 1) { 
                sports_settings.checked = true;
            } else {
                sports_settings.checked = false;
            }
        } else if(key == "user_technology") {
            if(items.user_technology.value == 1) { 
                technology_settings.checked = true;
            } else {
                technology_settings.checked = false;
            }
        }
    });
});

//headlines toggle button 
headlines_settings.addEventListener('change', (event) =>{
    if(event.target.checked) {
        
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
                console.log('headlines saved');
            });

        }); 

        var user_headlines = {value:1}; 
        chrome.storage.local.set({user_headlines: user_headlines}, function() {
            console.log('user headlines saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('headlines', function() {
            console.log("headlines removed");
        }); 

        var user_headlines = {value:0}; 
        chrome.storage.local.set({user_headlines: user_headlines}, function() {
            console.log('user headlines saved to 0');
        });
    } 
}); 

//business toggle button 
business_settings.addEventListener('change', (event) =>{
    if(event.target.checked) {
        
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
                console.log('business saved');
            });
        }); 

        var user_business = {value:1}; 
        chrome.storage.local.set({user_business: user_business}, function() {
            console.log('user business saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('business', function() {
            console.log("business removed");
        }); 

        var user_business = {value:0}; 
        chrome.storage.local.set({user_business: user_business}, function() {
            console.log('user business saved to 0');
        });     
    } 
}); 
    
//entertainment toggle button 
entertainment_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
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
                console.log('entertainment saved');
            });
        });
        var user_entertainment = {value:1}; 
        chrome.storage.local.set({user_entertainment: user_entertainment}, function() {
            console.log('user entertainment saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('entertainment', function() {
            console.log("entertainment removed");
        }); 
        var user_entertainment = {value:0}; 
        chrome.storage.local.set({user_entertainment: user_entertainment}, function() {
            console.log('user entertainment saved to 0');
        });
    }
}); 


//sports toggle button
sports_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
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
                console.log('sports saved');
            });
        });
        var user_sports = {value:1}; 
        chrome.storage.local.set({user_sports: user_sports}, function() {
            console.log('user sports saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('sports', function() {
            console.log("sports removed");
        });
        var user_sports = {value:0}; 
        chrome.storage.local.set({user_sports: user_sports}, function() {
            console.log('user sports saved to 0');
        }); 
    }
}); 

//technology toggle button
technology_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
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
                console.log('technology saved');
            });
        });
        var user_technology = {value:1}; 
        chrome.storage.local.set({user_technology: user_technology}, function() {
            console.log('user technology saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('technology', function() {
            console.log("technology removed");
        }); 
        var user_technology = {value:0}; 
        chrome.storage.local.set({user_technology: user_technology}, function() {
            console.log('user technology saved to 0');
        });
    }
}); 