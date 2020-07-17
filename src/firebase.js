import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAQZ0L4p6CICXpBycCLui8eESj4lgvXpE",
  authDomain: "clone-fd2a4.firebaseapp.com",
  databaseURL: "https://clone-fd2a4.firebaseio.com",
  projectId: "clone-fd2a4",
  storageBucket: "clone-fd2a4.appspot.com",
  messagingSenderId: "591152941655",
  appId: "1:591152941655:web:6a937e6ccec5ce16193112",
  measurementId: "G-LT2M23W596",
});

const auth = firebase.auth()

export { auth }