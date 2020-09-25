//import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
  //measurementId: "G-EP00V55YCF"
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

const database = firebase.database(); 

export {firebase, database as default};

// database.ref('expenses').push({
//   Description: 'Coffee',
//   note:'',
//   amount: 100,
//   createdAt: 1000
// });


// database.ref('expenses').on('value',(snapshot) => {
//   const expenses =[];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed',(snapshot) => {
//   console.log (snapshot.key, snapshot.val());
// });


// database.ref('expenses').on( 'child_changed',(snapshot) => {
//   console.log (snapshot.key, snapshot.val());
// });

//child_addchild

// database.ref('expenses').push({
//   Description: 'Coffee',
//   note:'',
//   amount: 100,
//   createdAt: 2324342
// });


// const ValueDatabase = database.ref().on('value',(snapshot) => {
//     const val = snapshot.val()
//     console.log (`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// },(e) => {
//   console.log('error fetching data',e)
// })
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log (val);
//   })
//   .catch((e) => {
//     console.log('Error from fetching data ', e);
//   })

// database.ref().set({
//   name: 'Swetha Pravin',
//   age: 34,
//   stressLevel:6,
//   job:{
//     title:'house wife',
//     company:'home'
//   },
//   location:{
//     city:'Dartford',
//     country: 'UK'
//   }
// }).then(() => {
//   console.log('The data is saved');
// }).catch((e) => {
//   console.log('error ', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/title': 'Software Developer',
//   'location/city':'London'
// }).then(() => {
//     console.log('The data is updated');
//   }).catch((e) => {
//     console.log('error ', e);
//   });


// database.ref().remove()
//   .then(() => {
//     console.log('The data is removed');
//   }).catch((e) => {
//     console.log('error ', e);
//   });

// database.ref().update({
//   attribute:{
//     height:5,
//     weight: 65
//   }
// }).then(() => {
//   console.log('The attribute data is saved.');
// }).catch((e) => {
//   console.log('error ', e);
// });

// console.log('I have made request to add data');