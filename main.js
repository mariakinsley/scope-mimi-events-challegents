console.log(" day");
// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!



var par =document.getElementById("parag")
var btn1 =document.getElementById('btn1')
btn1.addEventListener("click",function() {
  par.innerHTML= "i am right";
})
var par2 =document.getElementById("para2")
var btn2 =document.getElementById('btn2')
btn2.addEventListener("click",function() {
  par2.innerHTML= "No, i am right";
})
// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
var box = document.getElementById("big-box")
box.addEventListener("mouseenter",function() {
  alert("hey, itold you not to click!")
})
// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the h1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the h1 should be "J".
var key = document.getElementById("key")
window.addEventListener("keypress", function(event){
  key.innerHTML=event.key
})

// Create an HTML page with a form. The form should include inputs for a username, password, an h1 tag as well as a button. In a Javascript file, write code that does the following things when the button is pressed:
// checks that the password is 12345678
// checks that the username is less than 14 characters in length
// if the info in the form is correct, have Javascript change the text in the h1 to say "Congrats on knowing your username and password!"
// // if anything is wrong, send an alert message saying "Incorrect username or password"
var user= document.getElementById("username")
var password=document.getElementById("password")
var btn=document.getElementById("button")
var cup=document.getElementById("awesome")
btn.addEventListener("click", function(){
  if (user.value.length < 14 && password.value == "12345678") {
cup.innerHTML="Congrats i am awesome!"
  } else {
alert("you are wrong")
  }
})
