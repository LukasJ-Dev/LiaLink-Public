import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { getUserUid } from './firebase-auth.utils';

import { app } from './firebase.utils';

const storage = getStorage();

export const uploadFileToStorage = async (folder, file) => {
  const uid = getUserUid();
  const fileName = file.name;
  const path = `${folder}/${uid}/${fileName}`;
  const fileRef = ref(storage, path);
  try {
    await uploadBytes(fileRef, file);
    return await getDownloadURL(ref(storage, path));
  } catch (error) {
    throw new Error(error.code);
  }
};

export const deleteFileFromStorage = async (folder, fileName) => {
  const uid = getUserUid();
  const path = `${folder}/${uid}/${fileName}`;
  console.log(path);
  const fileRef = ref(storage, path);
  try {
    await deleteObject(fileRef);
  } catch (error) {
    throw new Error(error.code);
  }
};
