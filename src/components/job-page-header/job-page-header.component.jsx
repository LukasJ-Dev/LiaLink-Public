import React from 'react';
import { useSelector } from 'react-redux';

import { selectSavedJobs } from '../../store/features/user/user.selectors';

import { theme } from '../../styles/themes';
import { Heart, CaretLeft } from '@phosphor-icons/react';
import { HeaderContainer } from './job-page-header.styles';
import { IconButtonContainer } from '../../styles/mixins';

const JobPageHeader = ({ callback, saveJobCallback, id }) => {
  const savedJobs = useSelector(selectSavedJobs);

  const getIsSaved = () => savedJobs?.some(job => job.id === +id);

  return (
    <HeaderContainer>
      <IconButtonContainer aria-label="Go back" onClick={callback}>
        <CaretLeft size={24} color={theme.colors.grayDark} aria-hidden="true" />
      </IconButtonContainer>

      <IconButtonContainer
        aria-label="Toggle save job"
        aria-pressed={getIsSaved()}
        onClick={saveJobCallback}
      >
        <Heart
          size={30}
          color={theme.colors.primary}
          weight={getIsSaved() ? 'fill' : 'bold'}
        />
      </IconButtonContainer>
    </HeaderContainer>
  );
};

export default JobPageHeader;
