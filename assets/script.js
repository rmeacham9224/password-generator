// Assignment code here
function generate() {

    //set password length/complexity
    let complexity = document.getElementById("slider").value;
    
    //possible password 
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()+=?";

    let password = "";

    for(var i=0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;
}

//set default length display of 75
document.getElementById("length").innerHTML = "length 75"; 

document.getElementById("slider").oninput = function() {
    
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML ="Length: 8";
    }
}






//var passwordLength = function() {
   // var promptLength = window.prompt('How long would you like your password to be? need to adjust this')
    //need to figure out how to link to what answer they select. could do short medium or long and give ranges.
    //if (promptLength === "" || promptLength === null){
      //  window.alert('please enter a value.');
       // return passwordLength();
    //}
//}

//var lowercase = function() {
  //  var promptLower = window.prompt('Would you like to add Lowercase letters? Enter "Y" for yes or "N" for no');
//
  //  //nothing entered
    //if (promptLower === "" || promptLower === null) {
      //  window.alert('Please enter "Y" or "N"');
        //return lowercase();
//    }
//
//    promptLower = promptLower.toLowerCase();

    //if person picks no
  //  if (promptLower === "n") {
    //    var confirmNoLower = window.confirm("Are you sure? Adding lowercase letters will strengthen your password.");
      //      if(confirmNoLower) {
        //        window.alert("Your password will not include lowercase letters.");
          //      return true;
            //} else {
              //  return false;
        //}
    //}
//}

//var uppercase = function() {
  //  var promptUpper = window.prompt('Would you like to add Uppercase letters? Enter "Y" for yes or "N" for no.');

    //if (promptUpper === "" || promptUpper === null) {
      //  window.alert ('Please enter "Y" or "N"');
        //return uppercase();
    //}

    //promptUpper = promptUpper.toLowerCase();

    //if  person picks no
    //if (promptUpper === "n") {
      //  var confirmNoUpper = window.confirm("Are you sure? Adding uppercase letters will strengthen your password.");
        //    if (confirmNoUpper) {
          //      window.alert("Your password will not include uppercase letters.");
            //    return true;
            //} else {
              //  return false;
       // }
   // }
//}

//still need to add numeric function
//var numeric = function() {
  //  var promptNumeric = window.prompt('Would you like to add Numerics? Enter "Y" for yes or "N" for no.');

    //if (promptNumeric === "" || promptNumeric === null) {
      //  window.alert ('Please enter "Y" or "N"');
        //return numeric();
    //}

    //promptNumeric = promptNumeric.toLowerCase();

    //if person picks no
   // if (promptNumeric === 'n') {
     //   var confirmNoNumeric = window.confirm("Are you sure? Adding numerics will strengthen your password.");
       // if (confirmNoNumeric) {
         //   window.alert("Your password will not include numerics.");
           // return true;
        //} else {
          //  return false;
        //}
    //}
//}

//var Special = function() {
  //  var promptSpecial = window.prompt('Would you like to add special characters? Enter "Y" for yes or "N" for no.');

    //if (promptSpecial === "" || promptSpecial === null) {
      //  window.alert ('Please enter "Y" or "N"');
        //return Special();
    //}

    //promptSpecial = promptSpecial.toLowerCase();

    //if person picks no
    //if (promptSpecial === 'n') {
      //  var confirmSpecial = window.confirm("Are you sure? Adding special characters will strengthen your password.");
        //if (confirmSpecial) {
          //  window.alert("Your password will not include special characters.");
            //return true;
        //} else {
          //  return false;
       // }
   // }
//}





//function generate(){
//}

//generate();



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//generate();
