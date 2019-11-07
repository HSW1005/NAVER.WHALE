//sub category - technology
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_technology = JSON.parse(response);

    var technology = {title : [], link : []};

    for(let i = 0; i < json_technology.articles.length; i++) {
        technology.title.push(json_technology.articles[i].title);
        technology.link.push(json_technology.articles[i].url); 
    }

    //store into whale.storage
    whale.storage.sync.set({technology: technology}, function() {console.log('technology saved');});
});