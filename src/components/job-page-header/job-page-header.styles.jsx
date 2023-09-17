import styled from 'styled-components';
import { headingXSmallRegular } from '../../styles/themes';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
  height: 4rem;
  width: 100%;
  max-width: 80rem;

  ${headingXSmallRegular}
`;
