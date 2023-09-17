import styled from 'styled-components';
import { headingXXSmallRegular, theme } from '../../styles/themes';

export const UploadCvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp6};
  margin: 0 auto;
  max-width: 45rem;

  h2 {
    ${headingXXSmallRegular};
    color: ${theme.colors.grayDark};
    margin-bottom: ${theme.spacing.sp3};
  }

  input {
    display: none;
  }
`;

export const UploadSectionContainer = styled.div`
  align-items: center;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  object-fit: contain;

  img {
    width: 100%;
  }
`;
