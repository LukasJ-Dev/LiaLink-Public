import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const AccountSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sp4};
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
`;

export const SettingsItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
