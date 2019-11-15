document.getElementById("settingclosebutton").addEventListener("click", settingclose);

function settingclose(){   
    setTimeout(close, 3000);
    window.alert("LOADING...")
}

function close() {
    window.location.replace("index.html");
}