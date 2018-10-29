function drawCircle(){
    var myCanvas = document.getElementById("drawHere");
    var ctx = myCanvas.getContext("2d");
    ctx.fillStyle="#ffffe6"; 
    ctx.strokeStyle="#ffffe6";
    var x = getRandom(); 
    var y = getRandom(); 
    var r = (Math.random() * 10); 
    ctx.beginPath();
    ctx.arc(x, y, r, 0, (Math.PI * 2), true); 
    ctx.stroke(); 
    ctx.fill(); 
}

function getRandom() {
    var min = 0; 
    var max = 500; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(drawCircle, 500);
