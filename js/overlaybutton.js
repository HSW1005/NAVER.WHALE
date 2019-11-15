document.getElementById("overlaybutton").addEventListener("click", overlayopen);

function overlayopen(){
	chrome.storage.local.get('contentscript', function(result) {
		if(typeof result.contentscript == 'undefined') {
			window.alert('"ALWAYS mode" 사용시 새 탭을 열어주세요.');
			var contentscript = {value:1};
				chrome.storage.local.set({contentscript:contentscript}, function() {
					console.log('contentscript set to 1');
				});
				var property = document.getElementById("overlaybutton");
				property.style.backgroundColor="black";
		} else {
			if(result.contentscript.value == 0) { //0이였으면 1로 바꾸고
				window.alert('"ALWAYS mode" 사용시 새 탭을 열어주세요.'); 
				var contentscript = {value:1};
				chrome.storage.local.set({contentscript:contentscript}, function() {
					console.log('contentscript set to 1');
				});
				var property = document.getElementById("overlaybutton");
				property.style.backgroundColor="black";
			}
			 else { //1이었으면 0으로 바꾼다. 
				window.alert('"ALWAYS mode"가 비활성화 되었습니다. 새 탭을 열어주세요.');
				var contentscript = {value:0};
				chrome.storage.local.set({contentscript:contentscript}, function() {
					console.log('contentscript set to 0');
				});
				var property = document.getElementById("overlaybutton");
				property.style.backgroundColor="rgb(50, 151, 232)";
			}
		}	
	});
}



