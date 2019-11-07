//sub category - sports
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_sports = JSON.parse(response);

    var sports = {title : [], link : []};

    for(let i = 0; i < json_sports.articles.length; i++) {
        sports.title.push(json_sports.articles[i].title);
        sports.link.push(json_sports.articles[i].url); 
    }

    //store into whale.storage
    whale.storage.sync.set({sports: sports}, function() {console.log('sports saved');});
});