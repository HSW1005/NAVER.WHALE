document.getElementById("overlaybutton").addEventListener("click", overlayopen);
function overlayopen(){
	chrome.storage.local.get('contentscript', function(result) {
		if(result.contentscript.value == 0) { //0이였으면 1로 바꾸고 
			var contentscript = {value:1};
			chrome.storage.local.set({contentscript:contentscript}, function() {
				console.log('contentscript set to 1');
			});
		} else { //1이었으면 0으로 바꾼다. 
			var contentscript = {value:0};
			chrome.storage.local.set({contentscript:contentscript}, function() {
				console.log('contentscript set to 0');
			});
		}
	});
}



