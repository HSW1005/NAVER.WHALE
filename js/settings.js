//variables
var headlines_settings = document.getElementById("headlines_settings");
var business_settings = document.getElementById("business_settings");
var entertainment_settings = document.getElementById("entertainment_settings");
var health_settings = document.getElementById("health_settings");
var science_settings = document.getElementById("science_settings");
var sports_settings = document.getElementById("sports_settings");
var technology_settings = document.getElementById("technology_settings");

chrome.storage.local.get('user_headlines', function(result) {
    if(result.user_headlines.value == 1) { 
        headlines_settings.checked = true;
    } else {
        headlines_settings.checked = false;
    }
});

chrome.storage.local.get('user_business', function(result) {
    if(result.user_business.value == 1) { 
        business_settings.checked = true;
    } else {
        business_settings.checked = false;
    }
}); 

chrome.storage.local.get('user_entertainment', function(result) {
    if(result.user_entertainment.value == 1) { 
        entertainment_settings.checked = true;
    } else {
        entertainment_settings.checked = false;
    }
});

chrome.storage.local.get('user_health', function(result) {
    if(result.user_health.value == 1) { 
        health_settings.checked = true;
    } else {
        health_settings.checked = false;
    }
});

chrome.storage.local.get('user_science', function(result) {
    if(result.user_science.value == 1) { 
        science_settings.checked = true;
    } else {
        science_settings.checked = false;
    }
});

chrome.storage.local.get('user_sports', function(result) {
    if(result.user_sports.value == 1) { 
        sports_settings.checked = true;
    } else {
        sports_settings.checked = false;
    }
});

chrome.storage.local.get('user_technology', function(result) {
    if(result.user_technology.value == 1) { 
        technology_settings.checked = true;
    } else {
        technology_settings.checked = false;
    }
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

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
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

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
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

//health toggle button
health_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
        var client = new HttpClient();

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
            var json_health = JSON.parse(response);

            var health = {title : [], link : [], description: [], urlToImage: []};

            for(let i = 0; i < json_health.articles.length; i++) {
                health.title.push(json_health.articles[i].title);
                health.link.push(json_health.articles[i].url); 
                health.description.push(json_health.articles[i].description);
                health.urlToImage.push(json_health.articles[i].urlToImage); 
            }

            //store into chrome.storage
            chrome.storage.local.set({health: health}, function() {
                console.log('health saved');
            });
        });
        var user_health = {value:1}; 
        chrome.storage.local.set({user_health: user_health}, function() {
            console.log('user health saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('health', function() {
            console.log("health removed");
        }); 
        var user_health = {value:0}; 
        chrome.storage.local.set({user_health: user_health}, function() {
            console.log('user health saved to 0');
        });
    }
}); 

//science toggle button
science_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
        var client = new HttpClient();

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
            var json_science = JSON.parse(response);

            var science = {title : [], link : [], description: [], urlToImage: []};

            for(let i = 0; i < json_science.articles.length; i++) {
                science.title.push(json_science.articles[i].title);
                science.link.push(json_science.articles[i].url); 
                science.description.push(json_science.articles[i].description);
                science.urlToImage.push(json_science.articles[i].urlToImage); 
            }

            //store into chrome.storage
            chrome.storage.local.set({science: science}, function() {
                console.log('science saved');
            });
        });
        var user_science = {value:1}; 
        chrome.storage.local.set({user_science: user_science}, function() {
            console.log('user science saved to 1');
        });
    } else {
        //remove from chrome.storage
        chrome.storage.local.remove('science', function() {
            console.log("science removed");
        }); 
        var user_science = {value:0}; 
        chrome.storage.local.set({user_science: user_science}, function() {
            console.log('user science saved to 0');
        });
    }
}); 

//sports toggle button
sports_settings.addEventListener('change', (event) => {
    if(event.target.checked) {
        var client = new HttpClient();

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
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

        client.get("https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
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