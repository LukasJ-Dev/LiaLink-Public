import styled from 'styled-components';
import { theme } from '../../styles/themes';
import {
  headingMediumBold,
  headingMediumRegular,
  headingXSmallRegular,
} from '../../styles/themes';
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary};

  width: 100%;
  height: 7rem;

  padding: ${theme.spacing.sp3} ${theme.spacing.sp6};

  h1 {
    ${headingMediumBold}
    color: #fff;

    &:focus {
      outline: 4px solid ${theme.colors.secondary};
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;

  ${headingXSmallRegular};
  color: #555555;
  h2 {
    margin-bottom: 24px;
    ${headingMediumRegular}
    color: #484343;
  }

  p {
    text-align: center;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  padding: 0px 24px 24px;
`;
