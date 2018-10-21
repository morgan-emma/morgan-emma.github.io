function person(name, birthYear, house, muggle) {
    this.name = name; 
    this.birthYear = birthYear; 
    this.house = house; 
    this.muggle = muggle; 
    this.age = 2018 - this.birthYear;
}
person.prototype.gradYear = function() {
    return this.birthYear + 17;
};

var s1 = new person('Harry', 1980, 'Gryffindor', false); 
var s2 = new person('Luna', 1981, 'Ravenclaw', false);  
var s3 = new person('Emma', 1991, 'Ravenclaw', true); 

console.log(s1, s2, s3); 

document.getElementById("students").innerHTML = (
    s1.name + ' is a ' + s1.house + ' and will graduate in ' + 
    s1.gradYear() + '. Is ' + s1.name + ' a muggle? ' + s1.muggle + '<br>' + 
    s2.name + ' is a ' + s2.house + ' and will graduate in ' + 
    s2.gradYear() + '. Is ' + s2.name + ' a muggle? ' + s2.muggle + '<br>' + 
    s3.name + ' is a ' + s3.house + ' and will graduate in ' + 
    s3.gradYear() + '. Is ' + s3.name + ' a muggle? ' + s3.muggle + '<br>'); 
