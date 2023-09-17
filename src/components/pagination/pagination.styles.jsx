import styled from 'styled-components';
import { bodySmallBold, theme } from '../../styles/themes';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sp2};
  padding: 0 2.4rem 2.4rem 2.4rem;
  width: 100%;

  button {
    width: ${({ numNumbers }) => `calc(100% / ${numNumbers})`};
    aspect-ratio: 1 / 1;
    max-width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${theme.borderRadius.small};
    ${bodySmallBold}
  }
`;

export const ItemContainer = styled.button`
  background-color: ${({ active }) =>
    active ? theme.colors.primary : theme.colors.white};
  color: ${({ active }) =>
    active ? theme.colors.white : theme.colors.grayDark};
`;
