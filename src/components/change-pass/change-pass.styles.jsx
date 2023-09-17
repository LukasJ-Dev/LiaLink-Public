import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const ChangePassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp8};
`;

export const ImgContainer = styled.div`
  width: 100%;
  object-fit: contain;
  max-width: 40rem;
`;

export const StyledImg = styled.img`
  width: 100%;
`;
