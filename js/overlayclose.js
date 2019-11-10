document.getElementById("closebutton").addEventListener("click", overlayclose);
function overlayclose(){
	whale.runtime.sendMessage({action: 'closeWindow'}); 
}