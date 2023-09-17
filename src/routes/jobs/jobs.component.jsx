import JobsHeader from '../../components/jobs-list-header/jobs-list-header.component';
import JobsList from '../../components/jobs-list/jobs-list.component';
import { PageContainer } from '../../styles/mixins';

const Jobs = () => {
  return (
    <>
      <JobsHeader />
      <PageContainer>
        <JobsList />
      </PageContainer>
    </>
  );
};

export default Jobs;
