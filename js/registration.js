var user = []; //array
var index = 0; //index is 0

if (localStorage.getItem("user") !== null) { //If there is nothing for user
        var user = JSON.parse(localStorage.getItem("user")); //parse the information for variable user
        }
        
    if (localStorage.getItem("user") !== null) {
        var index = user.length; //index is is the length of the array
        }

function submit() {

    user[index] = { // Object which includes the array
        name: document.getElementById("text3").value,
        email: document.getElementById("text4").value,
        Username: document.getElementById("text5").value,
        Password: document.getElementById("text6").value,
    };
        
    localStorage.setItem("user", JSON.stringify(user));//coverts into strings

    
if (document.getElementById("text3").value === "") {
    alert("Enter valid name");
}
    
if (document.getElementById("text5").value === "") {
    alert("Enter valid name");
}
    
if (document.getElementById("text6").value === "") {
    alert("Enter valid name");
}
    
if (document.getElementById("text4").value === "") {
    alert("Enter valid email");
}

if (document.getElementById("text3", "text5", "text6", "text4").value !== "") {
    alert("User added");//alerts User added
}
    
    location.reload();//refreshes the page
};
    
    