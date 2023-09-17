// Don't delete below import
import { app } from './firebase.utils';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from '@firebase/auth';

import { createUserDocumentFromAuth } from './firebase.store.utils';
import { doc } from '@firebase/firestore';

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth();

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);

export const signUpWithEmail = async ({ name, email, password }) => {
  if (!email || !password) return;

  const auth = getAuth();
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return await createUserDocumentFromAuth(user, name);
  } catch (error) {
    throw new Error(error);
  }
};

export const signInWithEmail = async ({ email, password }) => {
  if (!email || !password) return;

  const auth = getAuth();
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return await createUserDocumentFromAuth(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const googleSignIn = async () => {
  const auth = getAuth();

  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    return await createUserDocumentFromAuth(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const signOutUser = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
};

export const reauthenticateUser = async password => {
  const auth = getAuth();
  const { currentUser } = auth;
  if (!currentUser) {
    throw new Error(
      'Can not authenticate user because the user is not signed in.'
    );
  }
  const { email } = currentUser;
  const credential = EmailAuthProvider.credential(email, password);
  try {
    await reauthenticateWithCredential(currentUser, credential);
    return currentUser;
  } catch (error) {
    throw new Error(error.code);
  }
};

export const changeUserEmail = async (newEmail, currentUser) => {
  try {
    await updateEmail(currentUser, newEmail);
  } catch (error) {
    throw new Error(error.code);
  }
};

export const changeUserPassword = async (newPassword, currentUser) => {
  try {
    await updatePassword(currentUser, newPassword);
  } catch (error) {
    throw new Error(error.code);
  }
};

export const getUserUid = () => {
  const auth = getAuth();
  const { currentUser } = auth;
  if (!auth || !currentUser) return;
  return currentUser.uid;
};
// export const sendResetEmail = async email => {
//   const auth = getAuth();
//   try {
//     await sendPasswordResetEmail(auth, email);
//   } catch (error) {
//     throw new Error(error.code);
//   }
// };
