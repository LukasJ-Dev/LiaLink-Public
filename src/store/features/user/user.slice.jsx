import { createSlice } from "@reduxjs/toolkit";
import {
  changeUserEmail,
  changeUserPassword,
  googleSignIn,
  reauthenticateUser,
  signInWithEmail,
  signOutUser,
  signUpWithEmail,
} from "../../../utils/firebase/firebase-auth.utils";
import {
  deleteFileFromStorage,
  uploadFileToStorage,
} from "../../../utils/firebase/firebase.storage.utils";
import { updateUserDataInFirebase } from "../../../utils/firebase/firebase.store.utils";

import { CAGE_API_KEY } from "../../../utils/variables.utils";

import ToastNotification from "../../../components/toaster/toaster.component";
import { selectJobs } from "../jobs/jobs.selector";
import { selectSavedJobs, selectProfileInfo } from "./user.selectors";

export const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const getCity = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${CAGE_API_KEY}`
    );
    const data = await res.json();
    return data.results[0].components.city_district;
  } catch (error) {
    console.log(error);
  }
};

export const setUserLocationByCoordsAsync =
  () => async (dispatch, getState) => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error)
        );
      });
      const { latitude, longitude } = position.coords;
      const coords = { lat: latitude, lng: longitude };
      const city = await getCity(latitude, longitude);
      const profileInfo = selectProfileInfo(getState());
      const newProfileInfo = { ...profileInfo, city, coords };
      dispatch(saveUserProfileInfoAsync(newProfileInfo));
    } catch (error) {
      ToastNotification(error.message, false, 2000);
    }
  };

export const setUserLocationByCityAsync =
  (formFields) => async (dispatch, getState) => {
    const { city } = formFields;

    try {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-${city}&key=${CAGE_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      const coords = data.results[0].geometry;
      const profileInfo = selectProfileInfo(getState());
      const newProfileInfo = { ...profileInfo, city, coords };
      dispatch(saveUserProfileInfoAsync(newProfileInfo));
    } catch (error) {
      ToastNotification(error.message, false, 2000);
    }
  };

export const signInWithGoogleAsync = () => async (dispatch) => {
  dispatch(signStart());
  try {
    const userData = await googleSignIn();
    dispatch(signSuccess(userData));
  } catch (error) {
    dispatch(signFailed(error.message));
    ToastNotification(error.message);
  }
};

export const signUpWithEmailAsync = (formFields) => async (dispatch) => {
  dispatch(signStart());
  try {
    const userData = await signUpWithEmail(formFields);
    dispatch(signSuccess(userData));
  } catch (error) {
    dispatch(signFailed(error.message));
    ToastNotification(error.message);
  }
};

export const signInWithEmailAsync = (formFields) => async (dispatch) => {
  dispatch(signStart());
  try {
    const userData = await signInWithEmail(formFields);
    dispatch(signSuccess(userData));
  } catch (error) {
    ToastNotification(error.message, false);
    dispatch(signFailed(error.message));
  }
};

export const logOutAsync = () => async (dispatch) => {
  dispatch(logOutStart());
  try {
    await signOutUser();
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutFailed(error.message));
  }
};

export const saveUserImgDataAsync = (imgData, imgFile) => async (dispatch) => {
  let newImgData = imgData;
  dispatch(saveUserDataStart());
  try {
    if (imgFile) {
      const imgUrl = await uploadFileToStorage("userPics", imgFile);
      newImgData = {
        ...imgData,
        imgUrl,
      };
    }
    await updateUserDataInFirebase("imgData", newImgData);
    dispatch(saveUserImgDataSuccess(newImgData));
    ToastNotification("Saved changes!", true);
  } catch (error) {
    dispatch(saveUserDataFailed(error.message));
    ToastNotification(error.message);
  }
};

export const saveUserCVAsync = (cv) => async (dispatch) => {
  dispatch(saveUserDataStart());

  try {
    const cvUrl = await uploadFileToStorage("userCvs", cv);
    const cvData = {
      fileName: cv.name,
      cvUrl,
    };
    await updateUserDataInFirebase("cvData", cvData);
    dispatch(saveUserCVSuccess(cvData));
    ToastNotification("Successfully uploaded CV", true);
  } catch (error) {
    dispatch(saveUserDataFailed(error.message));
    console.log(error);
    ToastNotification(error.message, false);
  }
};

export const deleteCvAsync = (fileName) => async (dispatch) => {
  dispatch(deleteFileFromStorageStart());
  try {
    await deleteFileFromStorage("userCvs", fileName);
    dispatch(deleteCVFromStorageSuccess());
    ToastNotification("Successfully deleted you CV", true);
  } catch (error) {
    dispatch(deleteFileFromStorageFailed(error.message));
    console.log(error);
    ToastNotification(error.message);
  }
};

export const saveUserProfileInfoAsync = (profileInfo) => async (dispatch) => {
  dispatch(saveUserDataStart());
  try {
    await updateUserDataInFirebase("profileInfo", profileInfo);
    dispatch(saveUserProfileInfoSuccess(profileInfo));
  } catch (error) {
    dispatch(saveUserDataFailed(error.message));
    ToastNotification(error.message, false);
  }
};

export const saveUserDisplayNameAsync = (name) => async (dispatch) => {
  dispatch(saveUserDataStart());
  try {
    await updateUserDataInFirebase("accountInfo.displayName", name);
    dispatch(saveUserDisplayNameSuccess(name));
    ToastNotification("Successfully changed name", true);
  } catch (error) {
    ToastNotification(error.message);
    dispatch(saveUserDataFailed(error.message));
  }
};

export const changeUserEmailAsync =
  (newEmail, password) => async (dispatch) => {
    dispatch(saveUserDataStart());
    try {
      const currentUser = await reauthenticateUser(password);
      await changeUserEmail(newEmail, currentUser);
      await updateUserDataInFirebase("accountInfo.email", newEmail);
      dispatch(changeUserEmailSuccess(newEmail));
      ToastNotification("Successfully changed email!", true);
    } catch (error) {
      ToastNotification(error.message);
      dispatch(saveUserDataFailed(error.message));
    }
  };

export const changeUserPasswordAsync =
  (oldPassword, newPassword) => async (dispatch) => {
    dispatch(saveUserDataStart());
    try {
      const currentUser = await reauthenticateUser(oldPassword);
      await changeUserPassword(newPassword, currentUser);
      dispatch(saveUserDataSuccess());

      ToastNotification("Successfully changed password!", true);
    } catch (error) {
      ToastNotification(error.message);
      dispatch(saveUserDataFailed(error.message));
    }
  };

export const updateUserSkillsListAsync = (list) => async (dispatch) => {
  dispatch(saveUserDataStart());
  try {
    await updateUserDataInFirebase("skills", list);
    dispatch(updateUserSkillsSuccess(list));
  } catch (error) {
    ToastNotification(error.message);
    dispatch(saveUserDataFailed(error.message));
  }
};

export const updateUserProfileVisibilityAsync =
  (isVisible) => async (dispatch) => {
    dispatch(saveUserDataStart());
    try {
      await updateUserDataInFirebase("accountInfo.isVisible", isVisible);
      dispatch(updateUserProfileVisibilitySuccess(isVisible));
    } catch (error) {
      ToastNotification(error.message);
      dispatch(saveUserDataFailed(error.message));
    }
  };

const getNewSavedJobs = (state, id) => {
  const jobs = selectJobs(state);
  const savedJobs = selectSavedJobs(state);

  if (savedJobs.some((job) => job.id === id)) {
    return savedJobs.filter((job) => job.id !== id);
  } else {
    const jobToAdd = jobs.find((job) => job.id === id);
    return [...savedJobs, jobToAdd];
  }
};

export const updateSavedJobsAsync = (jobId) => async (dispatch, getState) => {
  const state = getState();
  const newSavedJobs = getNewSavedJobs(state, jobId);

  dispatch(saveUserDataStart());
  try {
    await updateUserDataInFirebase("savedJobs", newSavedJobs);
    dispatch(updateSavedJobsSuccess(newSavedJobs));
  } catch (error) {
    ToastNotification(error.message);
    dispatch(saveUserDataFailed(error.message));
  }
};

export const saveLanguageAsync = (lang) => async (dispatch) => {
  dispatch(saveUserDataStart());
  try {
    await updateUserDataInFirebase("accountInfo.language", lang);
    dispatch(setUserLanguageSuccess(lang));
  } catch (error) {
    dispatch(saveUserDataFailed(error.message));
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signStart: (state) => {
      state.isLoading = true;
    },
    signSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    signFailed: (state, { payload }) => {
      state.isLoading = false;
      state.user = null;
      state.error = payload;
    },
    logOutStart: (state) => {
      state.isLoading = true;
    },
    logOutSuccess: (state) => {
      state.isLoading = false;
      state.user = initialState;
    },
    logOutFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    saveUserDataStart: (state) => {
      state.isLoading = true;
    },
    saveUserDataSuccess: (state) => {
      state.isLoading = false;
    },
    saveUserDataFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    deleteFileFromStorageStart: (state) => {
      state.isLoading = true;
    },
    deleteCVFromStorageSuccess: (state) => {
      state.isLoading = false;
      state.user.cvData = {};
    },
    deleteFileFromStorageFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    saveUserImgDataSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.imgData = payload;
    },
    saveUserCVSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.cvData = payload;
    },
    updateUserSkillsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.skills = payload;
    },
    saveUserProfileInfoSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.profileInfo = payload;
    },
    updateUserProfileVisibilitySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.accountInfo.isVisible = payload;
    },
    setUserLanguageSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.accountInfo.language = payload;
    },

    updateSavedJobsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.savedJobs = payload;
    },
    saveUserDisplayNameSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.accountInfo.displayName = payload;
    },
    changeUserEmailSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user.accountInfo.email = payload;
    },
    setUserLocation: (state, { payload }) => {
      state.location = payload;
    },
    setLanguageSetting: (state, { payload }) => {
      state.languageSetting = payload;
    },
  },
});

export const {
  signStart,
  signSuccess,
  signFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  saveUserDataStart,
  saveUserDataSuccess,
  saveUserDataFailed,
  saveUserImgDataSuccess,
  saveUserProfileInfoSuccess,
  saveUserDisplayNameSuccess,
  changeUserEmailSuccess,
  saveUserCVSuccess,
  deleteFileFromStorageStart,
  deleteCVFromStorageSuccess,
  deleteFileFromStorageFailed,
  updateUserSkillsSuccess,
  updateUserProfileVisibilitySuccess,
  updateSavedJobsSuccess,
  setUserLocation,
  setLanguageSetting,
  setUserLanguageSuccess,
} = userSlice.actions;

export default userSlice.reducer;
