import styled from 'styled-components';
import {
  bodySmallRegular,
  headingXSmallRegular,
  theme,
} from '../../styles/themes';

export const SetInfoContainer = styled.div`
  width: 100%;

  section {
    width: 100%;
  }

  h2 {
    ${headingXSmallRegular}
    margin-top: ${theme.spacing.sp7};
    text-align: center;
  }

  p {
    ${bodySmallRegular}
    margin: .5rem 0;
  }
`;
