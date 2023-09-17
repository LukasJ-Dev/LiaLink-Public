import { createSelector } from '@reduxjs/toolkit';

const jobsSlice = state => state.jobs;

export const selectJobs = createSelector(
  [jobsSlice],
  jobsSlice => jobsSlice.jobs
);

export const selectFilterState = createSelector(
  [jobsSlice],
  jobsSlice => jobsSlice.filterState
);

export const selectItemOffset = createSelector(
  [jobsSlice],
  jobsSlice => jobsSlice.itemOffset
);

export const selectFilteredJobs = createSelector(
  [jobsSlice],
  jobsSlice => jobsSlice.filteredJobs
);

export const selectActiveJobSearchTerm = createSelector(
  [jobsSlice],
  jobsSlice => jobsSlice.activeJobSearchTerm
);

export const SelectJobById = createSelector(
  [selectJobs, (state, id) => id],
  (jobs, id) => jobs.filter(job => job.id == id)[0]
);
