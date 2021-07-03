import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDpq0imeVew7wYP1G61fTLvCM9b17crvE0",
  authDomain: "photo-galary-8446c.firebaseapp.com",
  projectId: "photo-galary-8446c",
  storageBucket: "photo-galary-8446c.appspot.com",
  messagingSenderId: "483416788914",
  appId: "1:483416788914:web:4aea7de0c30d3627845eab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };