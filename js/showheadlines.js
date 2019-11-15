chrome.storage.local.get('user_headlines', function(result) {
    if(typeof result.user_headlines == 'undefined') { //처음 앱을 설치한경우 속보만 보여주도록 설정! 

        var user_headlines = {value:1}; 
        chrome.storage.local.set({user_headlines: user_headlines}, function() {
            console.log('user headlines saved to 1'); //1로 저장한다. 
        });

        //그리고 API를 받아와서 스토리지에 저장해준다. 
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
    }
});
