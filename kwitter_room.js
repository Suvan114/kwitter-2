
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD69T4CtCcEXSgOHkCne7tvXerhHPqWpRI",
      authDomain: "elixir-38b7b.firebaseapp.com",
      databaseURL: "https://elixir-38b7b-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "elixir-38b7b",
      storageBucket: "elixir-38b7b.appspot.com",
      messagingSenderId: "1088936616955",
      appId: "1:1088936616955:web:01f18409a1b864732de15e"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addroom(){
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          getData();
      //     localStorage.setItem("room_name",room_name);
      //     window.location="kwitter_page.html"
    }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname- "+Room_names);
      row="<div class='room_name' id= " +Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
// getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}