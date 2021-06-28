
var firebaseConfig = {
    apiKey: "AIzaSyBc-vJA_JVmE3mYPqspFBI_Bv9hy3NVjZ8",
    authDomain: "kwitter---fake-don-t-sue-me.firebaseapp.com",
    databaseURL: "https://kwitter---fake-don-t-sue-me-default-rtdb.firebaseio.com",
    projectId: "kwitter---fake-don-t-sue-me",
    storageBucket: "kwitter---fake-don-t-sue-me.appspot.com",
    messagingSenderId: "10563677294",
    appId: "1:10563677294:web:6376fcca9d27c46b4c0a7f"
  };

function addUser()
{

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

}