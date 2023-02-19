
var FirstName = false;

var FirstName = document.getElementById("FirstName").value;

if (FirstName==="null" || FirstName==="" || FirstName.length > 20)
    errorMessages = "<p>The firstname is required and cannot be greater than 20 characters</p>";
else{
   FirstName = true;
}
document.getElementById("errorMessages").innerHTML = errorMessages;


return (valid);

////////////////////////////////////


var LastName = false;

var LastName = document.getElementById("LastName").value;

//3) Do validation
if (LastName==="null" || LastName==="" || LastName.length > 50) {
  errorMessages = "<p>The last name is required and cannot be greater than 50 characters</p>";}
else{
   LastName = true;
}
  
//5) return status of each field
  
return (validFirstname && validLastname);

///////////////////////////////////////

var Phone = document.getElementById("Phone").value;
if (isNaN(Phone) ||Phone.length >15 || Phone===null || Phone==="") {
  errorMessages = "<p>The Phone number must have only 15 digits and NUMERICAL values</p>";
}

else {
  Phone true; 
}

var numbers=/^[0-9]+$/;
if (Phone===null||Phone ==="" ||Phone.length>15|| !Phone.match(numbers)){
 errorMessages = "<p>The Phone number must have only 15 digits and NUMERICAL values</p>"; }

else{
Phome true;
}

var username = document.getElementById("username").value;
if (username.length > 12)
    errorMessages = "<p>The firstname is required and cannot be greater than 20 characters</p>";
else{
   username = true;
  
  
  //////////////////////////////////
  
  var Country = document.getElementById("Country").value;
if (country === "USA) {
 errorMessages = "You don't need one if you aren't one";
    }
else{
 validZipcode = true; }
