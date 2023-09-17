import { CheckCircle } from '@phosphor-icons/react';
import styled, { css } from 'styled-components';
import {
  bodySmallRegular,
  bodyMediumRegular,
  theme,
} from '../../styles/themes';

const shrinkLabelStyles = css`
  color: ${theme.colors.grayDarkest};
  ${bodySmallRegular};
  top: 18px;
  left: 4px;
`;

export const InputAndLabel = styled.div`
  position: relative;
  width: 100%;

  input[type='password'] {
    letter-spacing: 0.5rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 12px;
  top: 58px;

  ${bodyMediumRegular}
  color: ${theme.colors.grayDark};

  ${({ shrink }) => shrink && shrinkLabelStyles}

  cursor: text;
  transition: 0.3s ease all;
`;

const inputStyles = css`
  width: 100%;
  padding: 1.2rem;
  margin-top: 4.4rem;
  vertical-align: text-top;

  background-color: #fff;
  color: ${theme.colors.grayDarkest};
  ${bodyMediumRegular}

  border: none;
  border-radius: 10px;

  &:focus {
    outline: 4px solid ${theme.colors.primary};
    outline-offset: 3px;
  }

  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }

  &:valid + svg {
    ${({ hasText }) => hasText && 'opacity: 1;'}
  }
`;

export const Input = styled.input`
  ${inputStyles}
  height: 5.6rem;
  ${({ select }) => select && 'border-radius: 10px 10px 0 0'}
`;

export const Textarea = styled.textarea`
  ${inputStyles}
  height: 20rem;
`;

export const StyledValidIcon = styled(CheckCircle)`
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  opacity: 0;
`;

export const IconRightContainer = styled.div`
  /* ${({ type }) => type !== 'password' && 'display: none;'} */

  position: absolute;
  right: 1.4rem;
  bottom: 1.6rem;
`;
