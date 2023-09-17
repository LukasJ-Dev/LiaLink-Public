import styled from 'styled-components';
import { PageContainer } from '../../styles/mixins';
import { theme } from '../../styles/themes';

export const SetUpContainer = styled(PageContainer)`
  gap: ${theme.spacing.sp4};
  min-height: 100vh;
  padding: ${theme.spacing.sp7} ${theme.spacing.sp6};
`;

export const HeadingContainer = styled.div`
  width: 100%;
  margin-bottom: ${theme.spacing.sp7};
`;

export const WelcomeTextContainer = styled.div`
  text-align: center;

  h1 {
    margin-bottom: ${theme.spacing.sp3};
  }
`;
