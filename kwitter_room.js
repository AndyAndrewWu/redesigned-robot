//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDBupnXGls1T0Q5f0le92WbMcOnuyK8lRo",
      authDomain: "kwiter-da038.firebaseapp.com",
      databaseURL: "https://kwiter-da038-default-rtdb.firebaseio.com",
      projectId: "kwiter-da038",
      storageBucket: "kwiter-da038.appspot.com",
      messagingSenderId: "784881651106",
      appId: "1:784881651106:web:2cffca3fb09b77babbf6fb",
      measurementId: "G-ZQM1L42EZ8"

};
firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='rederectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML =row;
                  //End code
            });
      });
}
getData();

function rederectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() 
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}