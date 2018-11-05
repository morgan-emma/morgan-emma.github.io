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
    
    document.getElementById('myText').style.color =  color ;
}
