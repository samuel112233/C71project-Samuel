
import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCZDTHGk1nb-BAGtBsiO29d6iNXppJ5yB4",
    authDomain: "bedtimestories-21156.firebaseapp.com",
    databaseURL: "https://bedtimestories-21156.firebaseio.com",
    projectId: "bedtimestories-21156",
    storageBucket: "bedtimestories-21156.appspot.com",
    messagingSenderId: "232697495988",
    appId: "1:232697495988:web:43b7e6a88ddd4e88edf2e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();  