function fontColor() {
	var myFontSelect = "document.getElementById('font');"

	var color = '#000000'; 
    var selected = document.getElementById('font').value;
    switch (selected) {
        case '0': 
            color = '#000000'; 
            break; 
        case '1': 
            color = '#ff0000'; 
            break; 
        case '2': 
            color = '#ff751a'; 
            break; 
        case '3': 
            color = '#ffff00';
            break; 
        case '4': 
            color = '#00ff00'; 
            break; 
        case '5': 
            color = '#3399ff'; 
            break; 
        case '6': 
            color = '#cc33ff'; 
            break; 
        default: 
            color = '#000000'; 
            break;             
            }
    
    document.getElementById('myText').style.color =  color;
}

function fontSize() {
	var myFontSelect = "document.getElementById('font');"

	var size = '12pt'; 
    var selected = document.getElementById('size').value;
    switch (selected) {
        case '0': 
            size = '12pt'; 
            break; 
        case '1': 
            size = '6pt'; 
            break; 
        case '2': 
            size = '12pt'; 
            break; 
        case '3': 
            size = '25pt';
            break; 
        case '4': 
            size = '40pt'; 
            break; 
        case '5': 
            size = '50pt'; 
            break; 
        case '6': 
            size = '90pt'; 
            break; 
        default: 
            size = '12pt'; 
            break;             
            }
    
    document.getElementById('myText').style.fontSize =  size;
}
