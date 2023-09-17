import { createSelector } from 'reselect';

const userSlice = state => state.user;

export const selectUser = createSelector(
  [userSlice],
  userSlice => userSlice.user
);

export const selectAccountInfo = createSelector(
  [selectUser],
  user => user.accountInfo
);

export const selectProfileInfo = createSelector(
  [selectUser],
  user => user.profileInfo
);

export const selectImgData = createSelector([selectUser], user => user.imgData);

export const selectCVData = createSelector([selectUser], user => user.cvData);

export const selectUserSkills = createSelector(
  [selectUser],
  user => user.skills
);

export const selectUserProfileVisibility = createSelector(
  [selectAccountInfo],
  accountInfo => accountInfo?.isVisible
);

export const selectSavedJobs = createSelector(
  [selectUser],
  user => user.savedJobs
);

export const selectIsSearchingJobs = createSelector(
  [selectUser],
  user => user.selectIsSearchingJobs
);

export const selectSignInSuccess = createSelector([userSlice], userSlice => {
  const signInSuccess = userSlice.user !== null;
  return signInSuccess;
});

export const selectUserLocation = createSelector(
  [selectProfileInfo],
  profileInfo => profileInfo?.coords
);

export const selectLanguage = createSelector(
  [selectAccountInfo],
  accountInfo => accountInfo?.language
);
