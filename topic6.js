var name 

function getName() { 
	name = document.getElementById("name").value; 
} 

function myDomManip() {
    var myMessage = name + " is awesome"; 
    var myElement = document.createElement("p");
    var t = document.createTextNode(myMessage);
    myElement.appendChild(t);
    document.body.appendChild(myElement);
}
