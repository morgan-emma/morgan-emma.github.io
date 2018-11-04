function storeInfo() {
    localStorage.setItem("name", document.getElementById('name').value);
    localStorage.setItem("age", document.getElementById('age').value); 
    console.log(localStorage.getItem("name")); 
}

function displayInfo() { 
    var toPrint = ""; 
    
    if (localStorage.getItem("name") != null) { 
        toPrint += "Hello, " + localStorage.getItem("name") + ". You are " + localStorage.getItem("age") + " years old. <br>"; 
    }
    else { 
        toPrint = "You haven't entered your information"; 
    }
    document.getElementById("displayInfo").innerHTML = toPrint; 
}

function clearInfo() { 
    localStorage.clear("name"); 
    localStorage.clear("age"); 
    
}
