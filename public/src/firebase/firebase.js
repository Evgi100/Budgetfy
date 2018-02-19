import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyA_qo8QAm2_zhuEIhBDMruuh3AKu4GQdNM",
    authDomain: "budgetfy.firebaseapp.com",
    databaseURL: "https://budgetfy.firebaseio.com",
    projectId: "budgetfy",
    storageBucket: "budgetfy.appspot.com",
    messagingSenderId: "455844402904"
};


firebase.initializeApp(config);




const database = firebase.database()

const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };