import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default async function firebaseAuth(email, password) {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (err) {
    return null;
  }
}
