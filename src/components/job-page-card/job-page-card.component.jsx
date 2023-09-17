import React from 'react';
import { useSelector } from 'react-redux';

import { selectProfileInfo } from '../../store/features/user/user.selectors';

import DefaultProfileLogo from '../common/default-profile-logo/default-profile-logo.component';
import Button, { BUTTON_SIZES } from '../button/button.component';

import { calculateDistance, parsedDate } from '../../utils/helperFunctions';

import * as S from './job-page-card.styles';
import { theme } from '../../styles/themes';
import salaryIcon from '../../assets/icons/salary.svg';
import jobTypeIcon from '../../assets/icons/job-type.svg';
import distanceIcon from '../../assets/icons/distance.svg';
import { useTranslation } from 'react-i18next';

const JobPageCard = ({ job }) => {
  const { t } = useTranslation();

  const profileInfo = useSelector(selectProfileInfo);

  const getDistance = () => {
    const { lat, lng } = job.location;
    const { coords } = profileInfo;

    return Math.round(calculateDistance(lat, lng, coords.lat, coords.lng));
  };

  return (
    <S.JobPageCardContainer>
      <S.TitleCard>
        <S.Logo>
          <DefaultProfileLogo
            profileName={job.companyName}
            width="60"
            height="60"
            fontSize="30"
          />
        </S.Logo>
        <h1 tabIndex={0}>{job.jobName}</h1>
        <h2 tabIndex={0}>{job.companyName}</h2>
        <S.CompanyInfo>
          <p tabIndex={0}>{job.city}</p>
          <p tabIndex={0}>{parsedDate(job.date)}</p>
        </S.CompanyInfo>
      </S.TitleCard>
      <S.TagCardContainer>
        <S.TagCard tabIndex={0}>
          <img aria-hidden="true" src={salaryIcon} alt="salary icon" />
          {/* <S.TagLabel>Salary</S.TagLabel> */}
          <S.TagInfo tabIndex={0}>{job.salary ? 'Paid' : 'Unpaid'}</S.TagInfo>
        </S.TagCard>
        <S.TagCard>
          <img aria-hidden="true" src={jobTypeIcon} alt="Job type icon" />
          {/* <S.TagLabel>Job Type</S.TagLabel> */}
          <S.TagInfo tabIndex={0}>{job.jobType}</S.TagInfo>
        </S.TagCard>
        <S.TagCard>
          <img aria-hidden="true" src={distanceIcon} alt="Distance icon" />
          {/* <S.TagLabel>distance</S.TagLabel> */}
          {profileInfo?.coords && (
            <S.TagInfo tabIndex={0}>{getDistance()}Km</S.TagInfo>
          )}
        </S.TagCard>
      </S.TagCardContainer>
      <S.DescriptionContainer>
        <h3 tabIndex={0}>Description</h3>
        <p tabIndex={0}>{job.description}</p>
      </S.DescriptionContainer>
      <Button size={BUTTON_SIZES.MEDIUM} color={theme.colors.secondary}>
        {t('labels.apply_now')}
      </Button>
    </S.JobPageCardContainer>
  );
};

export default JobPageCard;
