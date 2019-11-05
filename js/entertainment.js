//sub category - entertainment
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_entertainment = JSON.parse(response);

    var entertainment = {title : [], link : []};

    for(let i = 0; i < json_entertainment.articles.length; i++) {
        entertainment.title.push(json_entertainment.articles[i].title);
        entertainment.link.push(json_entertainment.articles[i].url); 
    }

    //store into chrome.storage
    chrome.storage.sync.set({entertainment: entertainment}, function() {console.log('entertainment saved');});
});