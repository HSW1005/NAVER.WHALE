//sub category - science
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_science = JSON.parse(response);

    var science = {title : [], link : []};

    for(let i = 0; i < json_science.articles.length; i++) {
        science.title.push(json_science.articles[i].title);
        science.link.push(json_science.articles[i].url); 
    }

    //store into chrome.storage
    chrome.storage.sync.set({science: science}, function() {console.log('science saved');});
});