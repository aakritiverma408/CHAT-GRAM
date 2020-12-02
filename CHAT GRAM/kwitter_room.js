
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAAMD-rNHyO4CnGlO5LrY5NyD57AkGolNI",
      authDomain: "chatgram-f158b.firebaseapp.com",
      databaseURL: "https://chatgram-f158b.firebaseio.com",
      projectId: "chatgram-f158b",
      storageBucket: "chatgram-f158b.appspot.com",
      messagingSenderId: "970065039380",
      appId: "1:970065039380:web:0cb4231cd10fb2efe15701"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
