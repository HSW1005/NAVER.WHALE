document.getElementById("settingclosebutton").addEventListener("click", settingclose);

function settingclose(){   
    setTimeout(close, 2000); 
}

function close() {
    window.location.replace("index.html");
}