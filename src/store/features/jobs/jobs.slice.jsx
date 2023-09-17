import { createSlice } from '@reduxjs/toolkit';
import { fetchDocumentFromFirebase } from '../../../utils/firebase/firebase.store.utils';

export const getJobsAsync = () => async (dispatch, getState) => {
  const state = getState();
  if (state.jobs.length) return;
  dispatch(getJobsStart());
  try {
    const { jobs } = await fetchDocumentFromFirebase('jobs', 'jobsData');
    dispatch(setJobs(jobs));
  } catch (error) {
    dispatch(getJobsFailed(error));
  }
};

export const initalFilterState = {
  onSite: false,
  hybrid: false,
  remote: false,
  paid: false,
  unpaid: false,
  unlimited: true,
  distance: 10,
  sortRecent: true,
  sortDistance: false,
};

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
  filteredJobs: [],
  activeJobSearchTerm: '',
  filterState: initalFilterState,
  itemOffset: 0,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobsStart: state => {
      state.isLoading = true;
    },
    setJobs: (state, { payload }) => {
      state.jobs = payload;
      state.filteredJobs = payload;
      state.isLoading = false;
    },
    setFilter: (state, { payload }) => {
      state.filterState = payload;
    },
    setItemOffset: (state, { payload }) => {
      state.itemOffset = payload;
    },
    getJobsFailed: (state, { payload }) => {
      state.error = payload;
    },
    setFilteredJobs: (state, { payload }) => {
      state.filteredJobs = payload;
    },
    setActiveJobSearchTerm: (state, { payload }) => {
      state.activeJobSearchTerm = payload;
    },
    resetSearchAndFilter: state => {
      state.activeJobSearchTerm = '';
      state.filterState = initalFilterState;
      state.filteredJobs = state.jobs;
    },
  },
});

export const {
  getJobsStart,
  getJobsFailed,
  setJobs,
  setFilteredJobs,
  setActiveJobSearchTerm,
  setFilter,
  setItemOffset,
  setLastVisitedJobRef,
  resetSearchAndFilter,
} = jobsSlice.actions;

export default jobsSlice.reducer;
