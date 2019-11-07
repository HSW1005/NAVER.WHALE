//code reference: https://stackoverflow.com/questions/16493498/json-stringify-returns-object-object-instead-of-the-contents-of-the-object

var client = new HttpClient();

//top headlines
client.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json = JSON.parse(response);

    var headlines = {title : [], link : []};

    for(let i = 0; i < json.articles.length; i++) {
        headlines.title.push(json.articles[i].title);
        headlines.link.push(json.articles[i].url); 
    }

    //store into whale.storage
    whale.storage.sync.set({headlines: headlines}, function() {console.log('headlines saved');});
});

