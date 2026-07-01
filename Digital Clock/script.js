const getBannerId = document.getElementById("clock");

function getTime(){
    const timeNow = new Date();
    getBannerId.textContent = timeNow.toLocaleTimeString();    
}

setInterval(getTime,1000);