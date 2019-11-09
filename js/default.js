//이 파일을 맨 처음에 시작. background에서

/*var defaultUser = {headlines:1, business:0, entertainment:0, health:0, science:0, sports:0, technology:0};

//store into chrome.storage
chrome.storage.sync.set({user: defaultUser}, function() {
    console.log('default value set');
});*/

var user_headlines = {value:0};
var user_business = {value:0};
var user_entertainment = {value:0};
var user_health = {value:0};
var user_science = {value:0};
var user_sports = {value:0};
var user_technology = {value:0};
var contentscript = {value:0};

chrome.storage.local.set({user_headlines:user_headlines}, function() {
    console.log('user headlines set');
});

chrome.storage.local.set({user_business:user_business}, function() {
    console.log('user business set');
});

chrome.storage.local.set({user_entertainment:user_entertainment}, function() {
    console.log('user entertainment set');
});

chrome.storage.local.set({user_health:user_health}, function() {
    console.log('user health set');
});

chrome.storage.local.set({user_science:user_science}, function() {
    console.log('user science set');
});

chrome.storage.local.set({user_sports:user_sports}, function() {
    console.log('user sports set');
});

chrome.storage.local.set({user_technology:user_technology}, function() {
    console.log('user technology set');
});

chrome.storage.local.set({contentscript:contentscript}, function() {
    console.log('contentscript set');
});



