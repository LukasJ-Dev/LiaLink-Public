import styled from 'styled-components';
import { bodySmallRegular, theme } from '../../styles/themes';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: ${theme.spacing.sp7} ${theme.spacing.sp7} 0 ${theme.spacing.sp7};
  ${bodySmallRegular}

  #search-term {
    color: ${theme.colors.primary};
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.3rem 0.6rem;
  border: 1px solid ${theme.colors.grayDark};
  border-radius: ${theme.borderRadius.small};
  ${bodySmallRegular}
`;

export const IconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: ${theme.spacing.sp4};
`;

export const JobsListingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${theme.padding.large};
`;
