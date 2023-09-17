import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  selectActiveJobSearchTerm,
  selectFilteredJobs,
} from '../../store/features/jobs/jobs.selector';
import {
  setActiveJobSearchTerm,
  setFilteredJobs,
} from '../../store/features/jobs/jobs.slice';

import Search from '../search/search.component';

import * as S from './jobs-list-header.styles';
import { IconButtonContainer } from '../../styles/mixins';
import { Chat, List } from '@phosphor-icons/react';

const JobsHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredJobs = useSelector(selectFilteredJobs);
  const activeSearchTerm = useSelector(selectActiveJobSearchTerm);

  const handleSearchResult = (result, searchTerm) => {
    dispatch(setFilteredJobs(result));
    if (activeSearchTerm) {
    } else {
      dispatch(setActiveJobSearchTerm(searchTerm));
    }
  };

  return (
    <S.HeaderContainer>
      <IconButtonContainer
        onClick={() => navigate('/settings')}
        aria-label="Open settings"
      >
        <List size={30} color="#fff" weight="bold" aria-hidden="true" />
      </IconButtonContainer>
      <h1 tabIndex={0}>LiaLink</h1>
      <S.RightIconContainer>
        <Search
          searchCallback={handleSearchResult}
          searchArray={filteredJobs}
        />
      </S.RightIconContainer>
    </S.HeaderContainer>
  );
};

export default JobsHeader;
