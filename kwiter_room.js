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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log("room_name-"+name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
