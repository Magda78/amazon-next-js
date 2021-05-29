import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCa0tQxN47WO6CXi4Qqs5XZsqueDu1STaU",
    authDomain: "nex-45634.firebaseapp.com",
    projectId: "nex-45634",
    storageBucket: "nex-45634.appspot.com",
    messagingSenderId: "109758516452",
    appId: "1:109758516452:web:06da446eda1f47862770f1"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;