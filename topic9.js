function loadIt() { 
    alert("Load it!"); 
}

function changeIt() { 
    var selected = document.getElementById('select').value;
    var myBox = document.getElementById('selectResult'); 
    switch (selected) { 
        case '0': 
            break; 
        case '1': 
            myBox.innerHTML = "You bopped it!"; 
            break; 
        case '2': 
            myBox.innerHTML = "You twisted it!"; 
            break; 
        case '3': 
            myBox.innerHTML = "You pulled it!"; 
            break; 
        default: 
            break; 
    }
}

function clickIt() { 
    alert("You clicked it!"); 
}

function mouseOverIt() { 
    document.getElementById("overAndOut").innerHTML = "Mouse away from it!"; 
}

function mouseOutIt() { 
    document.getElementById("overAndOut").innerHTML = "Mouse over it!"; 
}

var numHits = 0; 
function hitIt() { 
    numHits++; 
    document.getElementById("type").innerHTML = "You typed it " + numHits + " times!"
}

function touchIt() { 
    document.getElementById("touch").innerHTML = "Stop touching it!"; 
}

function stopTouchingIt() { 
    document.getElementById("touch").innerHTML = "Touch it!"; 
}
