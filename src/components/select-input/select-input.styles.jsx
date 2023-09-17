import { CaretDown } from '@phosphor-icons/react';
import styled from 'styled-components';
import { bodyMediumRegular, bodySmallBold, theme } from '../../styles/themes';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    height: 3rem;
    ${bodySmallBold}
    color: ${theme.colors.grayDark};
    padding: 0.4rem;
  }

  input {
    width: 100%;
    padding: 1.2rem;

    background-color: #fff;
    color: ${theme.colors.grayDarkest};
    ${bodyMediumRegular}

    border: none;

    border-radius: ${({ open }) => (open ? ' 10px 10px 0 0' : '10px')};

    &:focus {
      outline: 2px solid ${theme.colors.primary};
    }
  }

  ul {
    position: absolute;
    top: 9.2rem;
    z-index: 10;

    display: flex;
    flex-direction: column;

    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 0 0 1rem 1rem;
    margin-top: -0.2rem;

    /* border: 2px solid ${theme.colors.primary}; */

    li {
      padding: 1.2rem;
      ${bodyMediumRegular}

      &:hover {
        background-color: ${theme.colors.primary};
        color: #fff;
      }
    }
  }
`;

export const StyledCaretDown = styled(CaretDown)`
  position: absolute;
  right: 1.2rem;
  top: 5rem;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;
