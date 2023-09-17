import styled from 'styled-components';
import { headingMediumBold, theme } from '../../styles/themes';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background-color: ${theme.colors.primary};

  width: 100%;
  height: 7rem;

  padding: ${theme.spacing.sp3} ${theme.spacing.sp6};

  h1 {
    ${headingMediumBold}
    color: #fff;
  }
`;

export const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sp5};
`;
