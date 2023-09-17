import * as S from './settings-header.styles';
import { theme } from '../../styles/themes';
import { CaretLeft } from '@phosphor-icons/react';
import { IconButtonContainer } from '../jobs-list/jobs-list.styles';

const SettingsHeader = ({ children, callback }) => {
  return (
    <S.SettingsHeaderContainer>
      <IconButtonContainer
        onClick={callback}
        label="back-button"
        data-testid="caret"
        role="button"
        aria-label="go back"
        tabIndex={0}
      >
        <CaretLeft aria-hidden="true" size={24} color={theme.colors.grayDark} />
      </IconButtonContainer>
      <h1 tabIndex={0}>{children}</h1>
    </S.SettingsHeaderContainer>
  );
};

export default SettingsHeader;
