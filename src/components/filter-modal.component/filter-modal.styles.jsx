import styled from 'styled-components';
import {
  bodySmallRegular,
  headingSmallBold,
  headingXSmallBold,
  theme,
} from '../../styles/themes';
import { IconButtonContainer } from '../jobs-list/jobs-list.styles';

export const StyledX = styled(IconButtonContainer)`
  position: absolute;
  top: ${theme.spacing.sp7};
  right: ${theme.spacing.sp7};
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100vw;
  max-width: 45rem;
  height: fit-content;

  background-color: ${theme.colors.grayLightest};
  padding: ${theme.spacing.sp7};

  h1 {
    ${headingSmallBold};
    color: ${theme.colors.grayDarkest};
    text-align: center;
    width: 100%;
  }

  h2 {
    ${headingXSmallBold}
    margin-bottom: 1rem;
    padding-left: 1.8rem;
  }

  input[type='range'] {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  section {
    max-width: 45rem;
  }
`;

export const InputContainer = styled.div`
  background-color: #fff;
  border-radius: ${theme.borderRadius.medium};
  padding: 1rem;

  p {
    ${bodySmallRegular}
    color: ${({ checked }) =>
      checked ? theme.colors.grayLightest : theme.colors.grayDark};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
