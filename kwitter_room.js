
var  firebaseConfig = {
      apiKey: "AIzaSyDR_7ESdCbOsrhEKPtd9-MWl04B1vD45sA",
      authDomain: "kwitter-app-50434.firebaseapp.com",
      databaseURL: "https://kwitter-app-50434-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-50434",
      storageBucket: "kwitter-app-50434.appspot.com",
      messagingSenderId: "208833313061",
      appId: "1:208833313061:web:364ddb6e6f0cc1f6b842cc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}