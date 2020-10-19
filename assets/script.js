// Assignment code here
window.alert("Welcome to the random password generator. Your password must include one of the following: Uppercase letters, Lowercase letters, numeric values, special characters");
window.alert("Adjust the length of the password with the sliding bar before generating your password");

function generate() {
    window.prompt("Would you like to add lowercase letters in your password?");
    window.prompt("Would you like to add Uppercase letters in your password?");
    window.prompt("Would you like to add Numeric values in your password?");
    window.prompt("Would you like to add special characters in your password?");

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




//var possible = {
  //  none: [],
    
    //confirmlower = window.prompt('Would you like to add Lowercase letters? Enter "Y" for yes or "N" for no'),
    //lowertrue = function(){
      //  if(confirmlower === "Y" || "y") {
        //var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        //} else {
        //low = none
        //}
    //},

    //up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //confirmupper = window.prompt('Would you like to add Uppercase letters? Enter "Y" for yes or "N" for no'),
    //uppertrue = function(){
      //  if (confirmupper === "Y" || "y") {
        //    this.lowertrue + up
        //} 
        //else {
          //  this.lowertrue + none
        //}
    //}, 

    //num = ["1","2","3","4","5","6","7","8","9"],
    //confirmnum = window.prompt('Would you like to add numeric values? Enter "Y" for yes or "N" for no'),
    //numtrue = function(){
      //  if (confirmnum === "Y" || "y") {
        //    this.uppertrue += num  
        //} 
        //else {
          //  this.uppertrue += none
        //} 
    //},
    //spe: ["!","@","~","%","$","(",")","?", "&"],
    //confirmspe = window.prompt('Would you like to add special characters? Enter "Y" for yes or "N" for no'),
    //spetrue = function(){
      //  if (confirmspe === "Y" || "y") {
        //    this.numtrue += spe
        //}
        //else {
          //  this.num += none
        //}
    //}
//}
        


//var lowup = low.concat(up);
//var lowspe = low.concat(spe);
//var upnum = up.concat(num);
//var upspe = up.concat(spe);
//var lowupnum = low.concat(up,num);
//var lowupspe = low.concat(up,spe);





//generate();
