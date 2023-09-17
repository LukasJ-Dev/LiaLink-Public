// don't delete below import
import { app } from './firebase.utils';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

export const db = getFirestore();

// export const getUserData = async user => {
//   const userDocRef = doc(db, 'users', user.uid);
//   const userSnapshot = await getDoc(userDocRef);
//   return userSnapshot.data();
// };

export const createUserDocumentFromAuth = async (user, name = null) => {
  if (!user) return;

  const userDocRef = doc(db, 'users', user.uid);
  let userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    let { email, displayName } = user;
    const createdAt = Date();
    if (name) displayName = name;

    try {
      await setDoc(userDocRef, {
        accountInfo: {
          displayName,
          email,
          createdAt,
          isVisible: true,
          language: '',
        },
        imgData: {},
        cvData: {},
        profileInfo: {},
        skills: [],
        isVisible: true,
        savedJobs: [],
      });
      userSnapshot = await getDoc(userDocRef);
    } catch (error) {
      throw new Error();
    }
  }

  const data = userSnapshot.data();
  return data;
};

export const updateUserDataInFirebase = async (field, data) => {
  const auth = getAuth();
  if (!auth || !auth.currentUser) return;

  try {
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(userDocRef, {
      [field]: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchDocumentFromFirebase = async (colectionName, docName) => {
  try {
    const docRef = doc(db, colectionName, docName);
    const snapshot = await getDoc(docRef);
    const data = snapshot.data();
    return data;
  } catch (error) {
    throw new Error(error.code);
  }
};

export const addDocumentToFirebase = async (collectionName, docName, data) => {
  try {
    const docRef = doc(db, collectionName, docName);
    await setDoc(docRef, data);
  } catch (error) {
    throw new Error(error.code);
  }
};
