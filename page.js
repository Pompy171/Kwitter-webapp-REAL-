var firebaseConfig = {
  apiKey: "AIzaSyCH1fXP525qahAK6TKg1YgvaQfC9Po7n-g",
  authDomain: "kwitter-project-43d21.firebaseapp.com",
  databaseURL: "https://kwitter-project-43d21-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-43d21",
  storageBucket: "kwitter-project-43d21.appspot.com",
  messagingSenderId: "442205194039",
  appId: "1:442205194039:web:ab335a2536c6cdc86a3cb2"
};
firebase.initializeApp(firebaseConfig);


var name = localStorage.getItem("name");
document.getElementById("welcome").innerHTML = "Welcome " + name + "!";

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose: "adding room" });
  localStorage.setItem("room_name", room_name);
  window.location = "chat.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;

              console.log("Room Name-" + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)' >#" + Room_names + "</div> <hr>";
              document.getElementById("output").innerHTML += row;


              //End code
        });
  });   
}
getData();

function redirecttoroomname(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "chat.html";

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location = "index.html";

}
