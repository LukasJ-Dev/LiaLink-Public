import styled from 'styled-components';

import {
  headingMediumBold,
  headingXSmallBold,
  theme,
  bodySmallBold,
  bodySmallRegular,
} from '../../styles/themes';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.sp8};

  width: 100%;
  padding: 3rem 2.4rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp3};

  margin-top: ${theme.spacing.sp7};

  h1 {
    ${headingMediumBold}
  }

  p {
    ${headingXSmallBold}
    text-align: center;
    color: ${theme.colors.grayDark};
  }
`;

export const LineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  border-bottom: 1px solid ${theme.colors.grayLight};

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1rem;
    background-color: ${theme.colors.grayLightest};
    color: ${theme.colors.grayDark};
    ${bodySmallBold};
  }
`;

export const BottomTextContainer = styled.div`
  ${bodySmallRegular}
  cursor: pointer;

  span:first-child {
    color: ${theme.colors.grayDark};
  }
  span:last-child {
    color: blue;
  }
`;
