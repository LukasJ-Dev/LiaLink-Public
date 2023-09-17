import styled from 'styled-components';

import { headingXSmallRegular } from '../../styles/themes';

export const SettingsHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 3rem;
  height: 4rem;
  width: 100%;
  max-width: 80rem;

  h1 {
    ${headingXSmallRegular}
  }
`;
