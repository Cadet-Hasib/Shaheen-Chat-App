import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGFKI_YePISHxe6JMEd7gMUoTkB4qVsmA",
    authDomain: "shaheen-chat-94733.firebaseapp.com",
    databaseURL: "https://shaheen-chat-94733.firebaseio.com",
    projectId: "shaheen-chat-94733",
    storageBucket: "shaheen-chat-94733.appspot.com",
    messagingSenderId: "663782829670",
    appId: "1:663782829670:web:4a9327dc24897feba2c7a7",
    measurementId: "G-6ZBSLL8HVJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;