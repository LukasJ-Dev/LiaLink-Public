import styled from 'styled-components';
import { bodyMediumRegular, theme } from '../../styles/themes';

export const SavedCvContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.sp5};

  width: 100%;
  max-width: 45rem;
  padding: ${theme.spacing.sp5};

  background-color: #fff;
  border-radius: ${theme.borderRadius.medium};
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sp5};

  ${bodyMediumRegular}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
