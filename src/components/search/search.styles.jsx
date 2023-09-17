import styled from 'styled-components';
import { bodyMediumRegular, theme } from '../../styles/themes';

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 45rem;
  color: ${theme.colors.grayDark};
  border-radius: ${theme.borderRadius.small};
  margin: 0 10px;
  border: none;
  ${bodyMediumRegular}
  &:focus {
    outline: 3px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  background-color: rgba(255, 87, 34);
  padding: 10px;
`;
