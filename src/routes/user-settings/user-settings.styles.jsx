import styled from 'styled-components';
import { PageContainer } from '../../styles/mixins';
import {
  bodyxSmallRegular,
  headingMediumBold,
  headingXXSmallRegular,
  theme,
} from '../../styles/themes';
import { SLIDE_IN_DURATION } from '../../utils/variables.utils';

export const SettingsContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sp7};
  padding: ${theme.spacing.sp7} ${theme.spacing.sp6};
  animation: slideIn ${SLIDE_IN_DURATION}s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  h2 {
    ${headingXXSmallRegular}
  }
`;

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  gap: ${theme.spacing.sp7};
`;

export const UserContainer = styled.header`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sp5};
  width: 100%;

  padding: ${theme.spacing.sp4};
  border-radius: ${theme.borderRadius.medium};

  background-color: #fff;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  aspect-ratio: 1 / 1;

  border: 1px solid ${theme.colors.grayMedium};
  border-radius: 50%;
  overflow: hidden;
`;

export const UserImg = styled.img`
  width: 100%;
  transform: ${({ offset, zoom }) =>
    `translate(${offset[0] / 5}px, ${offset[1] / 5}px) scale(${+zoom * 1.3}%)`};
`;

export const StyledInitials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary};
  ${headingMediumBold};
  color: #fff;
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${bodyxSmallRegular}

  span:last-child {
    font-weight: 700;
  }
`;

export const SectionContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sp3};

  width: 100%;
  max-width: 40rem;
`;

export const LogInBtnContainer = styled.div`
  margin-top: 70vh;
`;
