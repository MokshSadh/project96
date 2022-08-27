var firebaseConfig = {
    apiKey: "AIzaSyC0uujp0eq5crIWfIIjqNsfyLJP4xy3CEI",
    authDomain: "project-lets-chat-app-37bfc.firebaseapp.com",
    databaseURL: "https://project-lets-chat-app-37bfc-default-rtdb.firebaseio.com",
    projectId: "project-lets-chat-app-37bfc",
    storageBucket: "project-lets-chat-app-37bfc.appspot.com",
    messagingSenderId: "212707729981",
    appId: "1:212707729981:web:042cf61d630860a8998054"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
    });
    document.getElementById("msg").value="";

  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}