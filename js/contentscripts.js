chrome.storage.local.get('contentscript', function(result) {
    if(result.contentscript.value == 1) {
        chrome.runtime.sendMessage({action: 'openWindow'});  
    } else {
        //do nothing
    }
});



