import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectProfileInfo,
  selectUserLocation,
} from '../../store/features/user/user.selectors';

import DefaultProfileLogo from '../common/default-profile-logo/default-profile-logo.component';
import Button, { BUTTON_SIZES } from '../button/button.component';

import { calculateDistance } from '../../utils/helperFunctions';

import * as S from './joblisting-card.styles';
import { theme } from '../../styles/themes';
import FlexBetweenWrap from '../common/FlexBetweenWrap/FlexBetweenWrap';
import { Heart } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export default function JobListingCard({
  job: {
    id,
    jobName,
    description,
    location,
    salary,
    jobType,
    companyName,
    date,
    city,
  },
  isSaved,
  callbackSaveJob,
}) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const profileInfo = useSelector(selectProfileInfo);

  const getDistance = () => {
    const { lat, lng } = location;
    const { coords } = profileInfo;

    return Math.round(calculateDistance(lat, lng, coords.lat, coords.lng));
  };

  const openJob = jobId => {
    navigate(`/job/${jobId}`);
  };

  function getDaysAgo(timestamp) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const currentDate = new Date();
    const pastDate = new Date(timestamp);
    const timeDiff = Math.abs(currentDate.getTime() - pastDate.getTime());
    const daysDiff = Math.floor(timeDiff / oneDay);
    return daysDiff;
  }

  const handleSaveJobIconOnClick = id => {
    callbackSaveJob(id);
  };

  return (
    <S.jobCardContainer>
      <S.HeartIconContainer
        aria-label="Toggle save job"
        aria-pressed={isSaved}
        onClick={() => handleSaveJobIconOnClick(id)}
      >
        <Heart
          size={30}
          color={theme.colors.primary}
          weight={isSaved ? 'fill' : 'bold'}
        />
      </S.HeartIconContainer>
      <S.HeadingContainer>
        <DefaultProfileLogo profileName={jobName} />
        <S.JobName tabIndex={0}>{jobName}</S.JobName>
      </S.HeadingContainer>

      <S.FlexTagDiv gap={10}>
        <S.TagContainer1 tabIndex={0}>
          {salary ? 'Paid' : 'Unpaid'}
        </S.TagContainer1>
        <S.TagContainer2 tabIndex={0}>{jobType}</S.TagContainer2>
        {profileInfo?.coords && (
          <S.TagContainer3>{getDistance()}Km</S.TagContainer3>
        )}
      </S.FlexTagDiv>

      <S.FlexTagDiv gap={0} column={true} align={false}>
        <S.CompanyText tabIndex={0}>
          {companyName} - {city}
        </S.CompanyText>
        <S.Description tabIndex={0}>{description}</S.Description>
      </S.FlexTagDiv>

      <FlexBetweenWrap>
        <S.Date tabIndex={0}>{getDaysAgo(date)} days ago</S.Date>
        <Button
          size={BUTTON_SIZES.X_SMALL}
          color={theme.colors.secondary}
          callback={() => openJob(id)}
        >
          {t('labels.apply_now')}
        </Button>
      </FlexBetweenWrap>
    </S.jobCardContainer>
  );
}
