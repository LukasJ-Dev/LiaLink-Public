import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { SelectJobById } from '../../store/features/jobs/jobs.selector';
import { updateSavedJobsAsync } from '../../store/features/user/user.slice';

import JobPageCard from '../../components/job-page-card/job-page-card.component';
import JobPageHeader from '../../components/job-page-header/job-page-header.component';

import { JobPageContainer } from './job-page.styles';

export default function JobPage() {
  const { id } = useParams();
  const job = useSelector(state => SelectJobById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveJob = () => {
    dispatch(updateSavedJobsAsync(+id));
  };

  return (
    <JobPageContainer>
      <JobPageHeader
        id={id}
        saveJobCallback={saveJob}
        callback={() => navigate('/jobs')}
      />
      {job && <JobPageCard job={job} />}
    </JobPageContainer>
  );
}
