//powered by NewsAPI.org https://newsapi.org/ 
//code reference: https://stackoverflow.com/questions/247483/http-get-request-in-javascript

var HttpClient = function() {
    this.get = function(aUrl, aCallback) { 
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                aCallback(anHttpRequest.responseText);
            } 
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
