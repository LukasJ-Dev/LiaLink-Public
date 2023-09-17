import styled from 'styled-components';
import { PageContainer } from '../../styles/mixins';
import { theme } from '../../styles/themes';

export const ChangeAccountContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp8};

  padding: ${theme.spacing.sp7} ${theme.spacing.sp6};

  max-width: 80rem;

  div:first-child {
    width: 100%;
  }

  main {
    width: 100%;
    max-width: 60rem;
  }
`;
