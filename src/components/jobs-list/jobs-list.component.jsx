import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSavedJobs } from '../../store/features/user/user.selectors';
import {
  selectActiveJobSearchTerm,
  selectFilteredJobs,
  selectJobs,
} from '../../store/features/jobs/jobs.selector';
import { updateSavedJobsAsync } from '../../store/features/user/user.slice';
import { resetSearchAndFilter } from '../../store/features/jobs/jobs.slice';

import JobListingCard from '../joblisting-card/joblisting-card.component';
import FilterModal from '../filter-modal.component/filter-modal.component';
import Pagination from '../pagination/pagination.component';

import { ITEMS_PER_PAGE } from '../../utils/variables.utils';

import * as S from './jobs-list.styles';
import { FunnelSimple, X } from '@phosphor-icons/react';
import { theme } from '../../styles/themes';
import { useTranslation } from 'react-i18next';

export default function JobsList() {
  const dispatch = useDispatch();
  const {t} = useTranslation()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const allJobs = useSelector(selectJobs);
  const filteredJobs = useSelector(selectFilteredJobs);
  const savedJobs = useSelector(selectSavedJobs);
  const activeJobSearchTerm = useSelector(selectActiveJobSearchTerm);

  useEffect(() => setCurrentPage(1), [filteredJobs]);

  const getFirstJobIndex = () => (currentPage - 1) * ITEMS_PER_PAGE;

  const getLastJobIndex = () => currentPage * ITEMS_PER_PAGE - 1;

  const getJobsOnPage = () =>
    filteredJobs.filter(
      (_, i) => i >= getFirstJobIndex() && i <= getLastJobIndex()
    );

  const calcIsSaved = job => {
    let isSaved = false;
    if (savedJobs) {
      isSaved = savedJobs.some(savedJob => savedJob.id === job.id);
    }
    return isSaved;
  };

  const getJobsForCurrentPage = () => {
    let jobsOnPage = getJobsOnPage();

    return jobsOnPage.map((job, i) => (
      <JobListingCard
        callbackSaveJob={() => dispatch(updateSavedJobsAsync(job.id))}
        isSaved={calcIsSaved(job)}
        job={job}
        key={job.id}
        i={i}
      />
    ));
  };

  const getResultsText = () => {
    return `${t("labels.results")}: ${getFirstJobIndex() + 1}-${
      getLastJobIndex() + 1 < filteredJobs.length
        ? getLastJobIndex() + 1
        : filteredJobs.length
    } of ${filteredJobs.length} `;
  };

  const handleClearSearch = () => {
    dispatch(resetSearchAndFilter());
  };

  const getNumNumbers = () => {
    const width = window.screen.width;
    if (width > 600) return 10;
    if (width > 400) return 8;
    if (width <= 400) return 6;
  };

  return (
    <>
      {isFilterModalOpen ? (
        <FilterModal
          setIsFilterModalOpen={setIsFilterModalOpen}
          jobsArray={allJobs}
        />
      ) : (
        <>
          <S.MenuContainer>
            <S.ResultsContainer
              tabIndex={0}
              aria-label={`${getResultsText()} ${
                activeJobSearchTerm.length && `for ${activeJobSearchTerm}`
              } `}
            >
              <S.IconButtonContainer
                aria-label="Clear search and filter"
                onClick={handleClearSearch}
              >
                <X aria-hidden="true" size={18} color={theme.colors.grayDark} />
              </S.IconButtonContainer>
              <span>&nbsp; {getResultsText()}</span>
              {activeJobSearchTerm.length ? (
                <>
                  <span> &nbsp;{t("labels.for")} "</span>
                  <span id="search-term">{activeJobSearchTerm}</span>
                  <span>"</span>
                </>
              ) : (
                ''
              )}
            </S.ResultsContainer>
            <S.IconButtonContainer
              onClick={() => setIsFilterModalOpen(true)}
              aria-label="Open filter modal"
            >
              <FunnelSimple
                size={30}
                weight="bold"
                color="#555"
                aria-hidden="true"
              />
            </S.IconButtonContainer>
          </S.MenuContainer>

          <S.JobsListingContainer>
            {getJobsForCurrentPage()}
          </S.JobsListingContainer>

          {filteredJobs.length && (
            <Pagination
              numNumbers={getNumNumbers()}
              currentPage={currentPage}
              numPages={Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}
