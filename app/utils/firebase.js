import firebase from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyA9G6RvGszSV_LKzjgzqr7s13gDRyxyDLQ",
        authDomain: "turismoandalgala-bedf8.firebaseapp.com",
        databaseURL: "https://turismoandalgala-bedf8.firebaseio.com",
        projectId: "turismoandalgala-bedf8",
        storageBucket: "turismoandalgala-bedf8.appspot.com",
        messagingSenderId: "735581626386",
        appId: "1:735581626386:web:1d7da9f1f0dad4e07ab8cb",
        measurementId: "G-VG2LZ4PTJY"
      };
      // Initialize Firebase
      export const firebaseApp =  firebase.initializeApp(firebaseConfig);
      
      