import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: 'capstone1-337421.firebaseapp.com',
  projectId: 'capstone1-337421',
  storageBucket: 'capstone1-337421.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: '1:607840979096:web:bedaddd6e4e06b1a8d28ed',
};

initializeApp(firebaseConfig);
