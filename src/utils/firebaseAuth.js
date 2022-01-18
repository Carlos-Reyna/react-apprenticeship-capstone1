import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArEjSu5Db9QwV-KsEhaYuSHFFN9fB1RdA',
  authDomain: 'capstone1-337421.firebaseapp.com',
  projectId: 'capstone1-337421',
  storageBucket: 'capstone1-337421.appspot.com',
  messagingSenderId: '607840979096',
  appId: '1:607840979096:web:bedaddd6e4e06b1a8d28ed',
};

// Initialize Firebase

export default async function firebaseAuth(email, password) {
  initializeApp(firebaseConfig);
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (err) {
    return null;
  }
}
