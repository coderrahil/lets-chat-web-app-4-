
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
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{

  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
  })
  document.getElementById("msg").value = "";
}