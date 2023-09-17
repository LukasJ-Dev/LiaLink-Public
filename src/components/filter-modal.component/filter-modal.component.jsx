import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  initalFilterState,
  setFilter,
  setFilteredJobs,
} from '../../store/features/jobs/jobs.slice';
import { selectFilterState } from '../../store/features/jobs/jobs.selector';
import { selectUserLocation } from '../../store/features/user/user.selectors';

import Button from '../button/button.component';
import RadioInput from '../input-radio/input-radio.component';

import { calculateDistance } from '../../utils/helperFunctions';

import * as S from './filter-modal.styles';
import { FlexBetweenDiv } from '../common/FlexBetweenWrap/styled';
import { theme } from '../../styles/themes';
import { X } from '@phosphor-icons/react';
import { PageContainer } from '../../styles/mixins';
import { useTranslation } from 'react-i18next';

export default function FilterModal({ jobsArray, setIsFilterModalOpen }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterState = useSelector(selectFilterState);
  const userLocation = useSelector(selectUserLocation);

  const [sortRecent, setsortRecent] = useState(filterState.sortRecent);
  const [sortDistance, setSortDistance] = useState(filterState.sortDistance);

  const [onSite, setOnSite] = useState(filterState.office);
  const [hybrid, setHybrid] = useState(filterState.hybrid);
  const [remote, setRemote] = useState(filterState.remote);

  const [paid, setPaid] = useState(filterState.paid);
  const [unpaid, setUnpaid] = useState(filterState.unpaid);

  const [unlimited, setUnlimited] = useState(filterState.unlimited);
  const [distance, setDistance] = useState(filterState.distance);

  const [tempFilteredJobs, setTempFilteredJobs] = useState([]);

  const [filterStateHasChanged, setFilterStateHasChanged] = useState(false);

  const setStates = state => {
    setOnSite(state.onSite);
    setHybrid(state.hybrid);
    setRemote(state.remote);
    setPaid(state.paid);
    setUnpaid(state.unpaid);
    setDistance(state.distance);
    setUnlimited(state.unlimited);
    setsortRecent(state.sortRecent);
    setSortDistance(state.sortDistance);
  };

  const compareStates = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return true;
      }
    }
    return false;
  };

  const getFilteredState = () => ({
    onSite,
    hybrid,
    remote,
    paid,
    unpaid,
    distance,
    unlimited,
    sortDistance,
    sortRecent,
  });

  const getFilteredJobs = () => {
    const filteredArray = [...jobsArray]
      .filter(item => {
        if ((paid && unpaid) || (!paid && !unpaid)) return item;
        if (paid) return item.salary === 'Paid';
        if (unpaid) return item.salary === 'Unpaid';
      })
      .filter(item => {
        if ((onSite && hybrid && remote) || (!onSite && !hybrid && !remote))
          return item;
        if (!onSite && !hybrid) return item.jobType === 'Remote';
        if (!onSite && !remote) return item.jobType == 'Hybrid';
        if (!hybrid && !remote) return item.jobType == 'On site';
        if (!onSite) return item.jobType !== 'On site';
        if (!hybrid) return item.jobType !== 'Hybrid';
        if (!remote) return item.jobType !== 'Remote';
      })
      .filter(item =>
        unlimited ? item : item.distance <= parseFloat(distance)
      );
    sortRecent && filteredArray.sort((a, b) => b.date - a.date);
    sortDistance &&
      userLocation &&
      filteredArray.sort(
        (a, b) =>
          calculateDistance(
            a.location.lat,
            a.location.lng,
            userLocation.lat,
            userLocation.lng
          ) -
          calculateDistance(
            b.location.lat,
            b.location.lng,
            userLocation.lat,
            userLocation.lng
          )
      );
    return filteredArray;
  };

  useEffect(() => {
    if (paid && unpaid) {
      setPaid(false);
      setUnpaid(false);
    }

    if (onSite && hybrid && remote) {
      setRemote(false);
      setHybrid(false);
      setOnSite(false);
    }

    setFilterStateHasChanged(
      compareStates(getFilteredState(), initalFilterState)
    );
    setTempFilteredJobs(getFilteredJobs());
  }, [
    onSite,
    hybrid,
    remote,
    paid,
    unpaid,
    distance,
    unlimited,
    sortRecent,
    sortDistance,
  ]);

  const handleShowResults = () => {
    dispatch(setFilter(getFilteredState()));
    const jobs = getFilteredJobs();
    dispatch(setFilteredJobs(jobs));
    setIsFilterModalOpen(false);
  };

  const handleAllWorkType = () => {
    setOnSite(false);
    setHybrid(false);
    setRemote(false);
  };

  const handleAllSalary = () => {
    setPaid(false);
    setUnpaid(false);
  };

  const toggleSort = () => {
    setsortRecent(!sortRecent);
    setSortDistance(!sortDistance);
  };

  return (
    <>
      <S.Modal role="dialog" aria-label="Filter modal" tabIndex="0">
        <h1>Filter by:</h1>
        <S.StyledX
          aria-label="Close filter modal"
          onClick={() => setIsFilterModalOpen(false)}
        >
          <X size={30} aria-hidden="true" />
        </S.StyledX>
        <section>
          <h2>Sort by:</h2>
          <S.InputContainer role="menu">
            <RadioInput
              callback={toggleSort}
              checked={sortRecent}
              label={t('labels.most_recent')}
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={sortDistance}
              label={t('labels.distance')}
              callback={toggleSort}
              role="menuitemcheckbox"
            />
          </S.InputContainer>
        </section>
        <section>
          <h2>Work Type:</h2>
          <S.InputContainer role="menu">
            <RadioInput
              callback={handleAllWorkType}
              checked={!onSite && !hybrid && !remote}
              label="All work types"
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={onSite}
              label={t('labels.on_site')}
              callback={() => setOnSite(!onSite)}
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={hybrid}
              label={t('labels.hybrid')}
              callback={() => setHybrid(!hybrid)}
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={remote}
              label={t('labels.remote')}
              callback={() => setRemote(!remote)}
              role="menuitemcheckbox"
            />
          </S.InputContainer>
        </section>
        <section>
          <h2>Salary:</h2>
          <S.InputContainer role="menu">
            <RadioInput
              callback={handleAllSalary}
              checked={!paid && !unpaid}
              label={t('labels.all')}
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={paid}
              label={t('labels.paid')}
              callback={() => setPaid(!paid)}
              role="menuitemcheckbox"
            />
            <RadioInput
              checked={unpaid}
              label={t('labels.unpaid')}
              callback={() => setUnpaid(!unpaid)}
              role="menuitemcheckbox"
            />
          </S.InputContainer>
        </section>

        <section>
          <h2>{t('labels.distance_to_work')}</h2>
          <S.InputContainer role="menu" checked={unlimited}>
            <RadioInput
              checked={unlimited}
              label={t('labels.unlimited')}
              callback={() => setUnlimited(!unlimited)}
              role="menuitemcheckbox"
            />
            <input
              disabled={unlimited}
              onChange={e => setDistance(e.target.value)}
              min="0"
              max="20"
              type="range"
              value={unlimited ? 10 : distance}
              aria-label="Distance to work"
            />
            <FlexBetweenDiv>
              <p>O km</p>
              <p>{distance} km</p>
            </FlexBetweenDiv>
          </S.InputContainer>
        </section>

        <S.ButtonContainer>
          <Button callback={handleShowResults} color={theme.colors.secondary}>
            Show {tempFilteredJobs?.length} results
          </Button>
          {filterStateHasChanged && (
            <Button callback={() => setStates(initalFilterState)}>
              Reset filter
            </Button>
          )}
        </S.ButtonContainer>
      </S.Modal>
    </>
  );
}
