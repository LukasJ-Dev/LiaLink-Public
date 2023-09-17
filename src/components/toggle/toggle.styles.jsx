import styled from 'styled-components';
import { bodyMediumRegular, theme } from '../../styles/themes';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5.6rem;

  span {
    ${bodyMediumRegular}
  }
`;

export const ToogleOutside = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  height: 3rem;
  width: 6rem;
  background-color: ${({ isOn }) =>
    isOn ? theme.colors.primary : theme.colors.grayMedium};
  /* border: 3px solid ${theme.colors.grayDark}; */
  border-radius: 100px;

  &::before {
    content: ' ';
    background-color: #eee;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 0.3rem;
    border-radius: 50%;
  }
`;
