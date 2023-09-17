import styled from 'styled-components';
import * as t from '../../styles/themes';
import { theme } from '../../styles/themes';

export const JobPageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  button {
    margin: 0 auto;
  }
`;

export const TitleCard = styled.header`
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp3};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.boxShadow.small};
  padding: 1.6rem;
  padding-top: 5rem;
  margin-top: 50px;

  h1 {
    ${t.headingXSmallBold}
    text-align: center;
  }

  h2 {
    ${t.headingXXSmallRegular}
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${theme.colors.primaryShade1};
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
`;

export const CompanyInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    ${t.headingXXSmallRegular}
  }
`;

export const TagCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TagCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

// export const TagLabel = styled.p`
//   ${t.bodyxSmallRegular}
// `;

export const TagInfo = styled.p`
  ${t.bodySmallBold}
`;

export const DescriptionContainer = styled.main`
  h3 {
    ${t.headingXSmallBold}
    margin-bottom: .5rem;
  }

  p {
    ${t.bodyMediumRegular}
  }
`;
