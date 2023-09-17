import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  selectAccountInfo,
  selectImgData,
} from '../../store/features/user/user.selectors';
import { logOutAsync } from '../../store/features/user/user.slice';

import Button from '../../components/button/button.component';
import SettingsHeader from '../../components/settings-header/settings-header.component';

import * as S from './user-settings.styles';
import { theme } from '../../styles/themes';
import {
  ArrowRight,
  Camera,
  CaretRight,
  Code,
  EnvelopeSimple,
  FilePlus,
  IdentificationCard,
  Password,
  SlidersHorizontal,
  User,
} from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const UserSettings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const imgData = useSelector(selectImgData);
  const accountInfo = useSelector(selectAccountInfo);

  const handleLogOut = () => {
    dispatch(logOutAsync());

    navigate('/');
  };

  const handleGoToAccountSettings = page => {
    navigate(`/change-account/${page}`);
  };

  const handleGoToUpdateProfilePage = page => {
    navigate(`/update-profile/${page}`);
  };

  const getInitials = () => {
    if (!accountInfo.displayName) return;
    return accountInfo.displayName
      .split(' ')
      .map(string => string.slice(0, 1))
      .join('');
  };

  return (
    <S.SettingsContainer>
      <SettingsHeader callback={() => navigate('/jobs')}>
        {t('labels.settings')}
      </SettingsHeader>

      {accountInfo ? (
        <S.AccountInfoContainer>
          <S.UserContainer>
            <S.ProfileImageContainer>
              {imgData.zoom ? (
                <S.UserImg
                  src={imgData.imgUrl}
                  zoom={imgData.zoom}
                  offset={imgData.offset}
                  alt="Profile picture"
                  tabIndex={0}
                />
              ) : (
                <S.StyledInitials>{getInitials()}</S.StyledInitials>
              )}
            </S.ProfileImageContainer>
            <S.ProfileNameContainer>
              <span tabIndex={0}>{accountInfo.email}</span>
              <span tabIndex={0}>{accountInfo.displayName}</span>
            </S.ProfileNameContainer>
          </S.UserContainer>

          <S.SectionContainer>
            <h2 tabIndex={0}>Account</h2>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={<User size={24} color={theme.colors.grayDark} />}
              iconRight={<CaretRight size={24} color={theme.colors.grayDark} />}
              callback={() => handleGoToAccountSettings(0)}
              role="link"
            >
              {t('labels.change_username')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={
                <EnvelopeSimple size={24} color={theme.colors.grayDark} />
              }
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToAccountSettings(1)}
              role="link"
            >
              {t('labels.change_email')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={<Password size={24} color={theme.colors.grayDark} />}
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToAccountSettings(2)}
              role="link"
            >
              {t('labels.change_password')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={
                <SlidersHorizontal size={24} color={theme.colors.grayDark} />
              }
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToAccountSettings(3)}
              role="link"
            >
              {t('labels.account_settings')}
            </Button>
          </S.SectionContainer>
          <S.SectionContainer>
            <h2 tabIndex={0}>Profile</h2>

            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={
                <IdentificationCard size={24} color={theme.colors.grayDark} />
              }
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToUpdateProfilePage(0)}
              role="link"
            >
              {t('labels.update_profile')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={<Code size={24} color={theme.colors.grayDark} />}
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToUpdateProfilePage(1)}
              role="link"
            >
              {t('labels.update_skills')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={<Camera size={24} color={theme.colors.grayDark} />}
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToUpdateProfilePage(2)}
              role="link"
            >
              {t('labels.update_profile_pic')}
            </Button>
            <Button
              color={theme.colors.white}
              duelIcon={true}
              iconLeft={<FilePlus size={24} color={theme.colors.grayDark} />}
              iconRight={<CaretRight size={20} color={theme.colors.grayDark} />}
              callback={() => handleGoToUpdateProfilePage(3)}
              role="link"
            >
              {t('labels.upload_view_cv')}
            </Button>
          </S.SectionContainer>
          <Button callback={handleLogOut}>{t('labels.log_out')}</Button>
        </S.AccountInfoContainer>
      ) : (
        <S.LogInBtnContainer>
          <Button
            iconRight={<ArrowRight strokeWidth={3} />}
            callback={() => navigate('/sign-in')}
          >
            {t('labels.go_to_login')}
          </Button>
        </S.LogInBtnContainer>
      )}
    </S.SettingsContainer>
  );
};

export default UserSettings;
