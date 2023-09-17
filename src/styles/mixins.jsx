import styled from 'styled-components';
import { theme } from './themes';

export const IconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp8};
  width: 100%;
  max-width: 80rem;

  margin: 0 auto;
`;
