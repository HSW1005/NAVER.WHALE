//sub category - health
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_health = JSON.parse(response);

    var health = {title : [], link : []};

    for(let i = 0; i < json_health.articles.length; i++) {
        health.title.push(json_health.articles[i].title);
        health.link.push(json_health.articles[i].url); 
    }

    //store into chrome.storage
    chrome.storage.sync.set({health: health}, function() {console.log('health saved');});
});