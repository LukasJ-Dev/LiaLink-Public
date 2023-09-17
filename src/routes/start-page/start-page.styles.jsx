import styled from "styled-components";
import {
  headingMediumBold,
  headingXSmallBold,
  theme,
} from "../../styles/themes";

export const StartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.sp9};

  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 2.4rem;

  h1 {
    ${headingMediumBold}
  }

  p {
    ${headingXSmallBold}
    color: ${theme.colors.grayDark};
  }
`;

export const LogoContainer = styled.img`
  max-width: 20rem;
`;

export const IllustrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
  object-fit: contain;

  img:last-child {
    max-width: 100%;
  }
`;

export const HeadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${theme.spacing.sp3};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp4};
`;
