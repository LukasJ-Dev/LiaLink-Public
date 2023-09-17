import styled, { css } from 'styled-components';
import { headingXXXSmallRegular } from '../../styles/themes';
import { theme } from '../../styles/themes';

const currentPageStyles = css`
  color: ${theme.colors.primaryShade1};
  border-bottom: 2px solid ${theme.colors.primaryShade1};
`;

export const SetupNavDiv = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.sp5};
  width: 100%;
  margin-top: ${theme.spacing.sp5};
`;

export const NavItem = styled.span`
  text-align: center;
  width: 100%;
  padding: ${theme.spacing.sp3} 0px;
  color: ${theme.colors.grayDark};
  border-bottom: 2px solid ${theme.colors.grayMedium};

  ${headingXXXSmallRegular}

  ${({ currentPage }) => currentPage && currentPageStyles};

  &:hover {
    cursor: pointer;
    color: ${theme.colors.primaryShade1};
    border-color: ${theme.colors.primaryShade1};
  }
`;
