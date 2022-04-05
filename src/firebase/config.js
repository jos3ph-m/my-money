import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'mymoney-1d0a8.firebaseapp.com',
  projectId: 'mymoney-1d0a8',
  storageBucket: 'mymoney-1d0a8.appspot.com',
  messagingSenderId: '866306161880',
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp

export { projectFirestore, projectAuth };
