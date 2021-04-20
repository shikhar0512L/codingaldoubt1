var firebaseConfig = {
    apiKey: "AIzaSyA5V-aWfqKkSfN5YYK6cmpPEk_oGYvKsqw",
    authDomain: "form-ed4c6.firebaseapp.com",
    projectId: "form-ed4c6",
    storageBucket: "form-ed4c6.appspot.com",
    messagingSenderId: "376101958515",
    appId: "1:376101958515:web:df2d9f41ef24ae71b78b06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messagesRef= firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
     e.preventDefault();
var name = getInputVal('name');
var age=getInputVal('age');
var locality = getInputVal('locality');
var email = getInputVal('email');
var number = getInputVal('number');
var gender = getInputVal('gender');
var gender2 = getInputVal('gender2');

saveMessage(name,age,locality,email,number,gender,gender2);

}

function getInputVal(){
    return document.getElementById(id).value; 
}


function saveMessage(name,age,locality,email,number,gender,gender2){
     var newMessageRef=messagesRef.push();
     newMessageRef.set({
         name:name,
         age:age,
         number:number,
         gender:gender,
         gender2:gender2
     })
}