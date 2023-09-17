import { changeLanguage } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import SelectInput from '../select-input/select-input.component';
import {
  selectLanguage,
  selectUserProfileVisibility,
} from '../../store/features/user/user.selectors';
import {
  saveLanguageAsync,
  updateUserProfileVisibilityAsync,
} from '../../store/features/user/user.slice';

import Toggle from '../toggle/toggle.component';
import * as S from './account-settings.styles';

const AccountSettings = () => {
  const dispatch = useDispatch();

  const profileVisibility = useSelector(selectUserProfileVisibility);
  const language = useSelector(selectLanguage);

  const handleSelectLanguage = lang => {
    let langCode;
    if (lang === 'English') langCode = 'en';
    if (lang === 'Svenska') langCode = 'sv';

    changeLanguage(langCode);
    dispatch(saveLanguageAsync(langCode));
  };

  if (profileVisibility === undefined) return;
  return (
    <S.AccountSettingsContainer>
      <S.SettingsItemContainer>
        <Toggle
          textOn="Your profile is visible"
          textOff="Your profile is hidden"
          callback={isVisible =>
            dispatch(updateUserProfileVisibilityAsync(isVisible))
          }
          isOnInitial={profileVisibility}
        />
      </S.SettingsItemContainer>
      <S.SettingsItemContainer>
        <SelectInput
          callback={handleSelectLanguage}
          optionsArray={['English', 'Svenska']}
          initialValue={language}
          label="Choose a language:"
        />
      </S.SettingsItemContainer>
    </S.AccountSettingsContainer>
  );
};

export default AccountSettings;
