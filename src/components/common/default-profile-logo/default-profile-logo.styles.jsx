import styled from 'styled-components';
import { bodyMediumBold, theme } from '../../../styles/themes';

export const DefaultProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;

export const ProfileLetterText = styled.span`
  font-family: 'Poppins';
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 700;
  color: white;
`;
