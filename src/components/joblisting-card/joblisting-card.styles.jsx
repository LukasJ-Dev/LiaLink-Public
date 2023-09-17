import styled from 'styled-components';
import {
  bodySmallBold,
  bodySmallRegular,
  headingXSmallRegular,
  theme,
} from '../../styles/themes';

export const jobCardContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: '${theme.borderRadius.medium}';
  background-color: #ffffff;
  padding: 1.6rem;
  border-radius: ${theme.borderRadius.medium};
`;

export const HeartIconContainer = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const FlexTagDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  gap: ${props => `${props.gap}px`};
`;

export const JobName = styled.h1`
  ${headingXSmallRegular};
  font-weight: 700;
  width: fit-content;
`;

export const TagContainer1 = styled.div`
  background-color: #d7b9fd;
  color: #504461;
  border-radius: ${theme.borderRadius.small};
  padding: 0.6rem 1.2rem;
  ${bodySmallBold}
`;

export const TagContainer2 = styled.div`
  background-color: #b4f7ae;
  color: #3e5e3c;
  border-radius: ${theme.borderRadius.small};
  padding: 0.6rem 1.2rem;
  ${bodySmallBold}
`;

export const TagContainer3 = styled.div`
  background-color: #c5dbf7;
  color: #3c516b;
  border-radius: ${theme.borderRadius.small};
  padding: 0.6rem 1.2rem;
  ${bodySmallBold}
`;

export const CompanyText = styled.h2`
  ${bodySmallBold}
`;

export const Description = styled.p`
  ${bodySmallRegular};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Date = styled.p`
  ${bodySmallRegular}
  color: ${theme.colors.grayDark};
`;
