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

// database.ref().set({
// name: 'Eugene Shapira',
// age:35,
// stressLevel:7,
// job:{
//     title:'Full-stack',
//     "company":'CrapeDeimDev'
// },
// location:{
//     "country":"Israel",
//     "city":"Tel-Aviv"
// }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Failed');
// })

// database.ref().remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('There was an error');
//     })

// database.ref().update({
//     'job/title': 'Software Development'
// })

// database.ref('job/title').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('val: ', val);
//     }).catch((e) => {
//         console.log('There was an error');
//     })

// database.ref().on('value',(snapshot)=>{
//     const val=snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company} `);
// })

// database.ref('expenses').push({
//     description:'Rent',
//     note:'',
//     amount:1000,
//     createdAt:96468759
// })

// database.ref('expenses').once('value')
// .then((snapshot)=>{
//     const expenses=[]

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// Child added will fire each time child will be added and child changed.

// Notice that set return an promise

