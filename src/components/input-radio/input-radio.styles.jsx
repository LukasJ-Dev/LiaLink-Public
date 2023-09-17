import styled from 'styled-components';
import { bodyMediumRegular, theme } from '../../styles/themes';

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 4rem;
    height: 4rem;
    margin: 0 5px;
    opacity: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    transform: translate(1rem, -50%);
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 3px solid ${theme.colors.primary};
    ${({ hasFocus }) =>
      hasFocus &&
      `outline: 3px solid ${theme.colors.secondary};   outline-offset: 3px ; `}

    &::before {
      content: '';
      border-radius: 50%;
      padding: 0.6rem;
      font-size: 0px;
      background-color: ${theme.colors.primary};
      ${({ checked }) => !checked && 'display:none;'}
    }
  }

  label {
    padding-left: 1.2rem;
    ${bodyMediumRegular};
    color: ${theme.colors.grayDarkest};
  }
`;
