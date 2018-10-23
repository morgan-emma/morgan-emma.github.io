function person(name, birthYear, house, muggle) {
    this.name = name; 
    this.birthYear = birthYear; 
    this.house = house; 
    this.muggle = muggle; 
}

var s1 = new person('Harry', 1980, 'Gryffindor', false); 
var s2 = new person('Luna', 1981, 'Ravenclaw', false);  
var s3 = new person('Emma', 1991, 'Ravenclaw', true); 

var myArray = [s1, s2, s3]; 
var myJSON = JSON.stringify(myArray);
document.getElementById('stringify').innerHTML = myJSON; 

var myParsed = JSON.parse(myJSON); 
var allNames = '<br>'; 
for (var i = 0; i < myParsed.length; i++) {
    allNames += (myParsed[i].name + '<br>'); 
}
document.getElementById('parseNames').innerHTML = allNames; 

var allHouses = '<br>'; 
for (var j = 0; j < myParsed.length; j++) {
    allHouses += (myParsed[j].house + '<br>'); 
}
document.getElementById('parseHouses').innerHTML = allHouses; 
