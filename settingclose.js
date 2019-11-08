document.getElementById("settingclosebutton").addEventListener("click", settingclose);

function settingclose(){   
    setTimeout(close, 1500); 
}

function close() {
    window.location.replace("index.html");
}