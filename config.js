var firebase = require("firebase-admin");

var serviceAccount = require("./key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://instagramapi-76e14-default-rtdb.firebaseio.com"
});

const fireStore = firebase.firestore();
console.log("Hello From Firestore");

module.exports = fireStore;
