import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'mymoney-1d0a8.firebaseapp.com',
  projectId: 'mymoney-1d0a8',
  storageBucket: 'mymoney-1d0a8.appspot.com',
  messagingSenderId: '866306161880',
  appId: process.env.FIREBASE_APP_ID,
};
