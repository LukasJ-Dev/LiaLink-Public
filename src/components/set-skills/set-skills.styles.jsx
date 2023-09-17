import styled from 'styled-components';
import {
  bodyxSmallRegular,
  headingXSmallRegular,
  theme,
} from '../../styles/themes';
import { IconButtonContainer } from '../jobs-list/jobs-list.styles';

export const SetSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp7};

  width: 100%;
  height: 100%;
  margin-bottom: ${theme.spacing.sp10};

  h2 {
    ${headingXSmallRegular}
    text-align: center;
  }

  section {
    width: 100%;
  }
`;

export const UserSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.sp3};
  ${bodyxSmallRegular}
  margin-top: ${theme.spacing.sp8};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sp3};
    padding: ${theme.spacing.sp2} ${theme.spacing.sp3};
    color: #fff;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
    cursor: pointer;
    box-shadow: ${theme.boxShadow.small};
  }
`;

export const SkillButtons = styled(IconButtonContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sp3};
  padding: ${theme.spacing.sp3} ${theme.spacing.sp3};
  color: #fff;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  box-shadow: ${theme.boxShadow.small};
  font-weight: 700;
`;

export const AddSkillsContainer = styled.div`
  margin: 0 auto;
  margin-top: ${theme.spacing.sp2};
  max-width: 45rem;
`;
