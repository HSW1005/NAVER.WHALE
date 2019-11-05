//sub category - business
var client = new HttpClient();

client.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=6e148f857de44a82a3a5c5692f31c2ef", function(response) {
    var json_business = JSON.parse(response);

    var business = {title : [], link : []};

    for(let i = 0; i < json_business.articles.length; i++) {
        business.title.push(json_business.articles[i].title);
        business.link.push(json_business.articles[i].url); 
    }

    //store into chrome.storage
    chrome.storage.sync.set({business: business}, function() {console.log('business saved');});
});