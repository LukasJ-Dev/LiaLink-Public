import Button, { BUTTON_SIZES } from '../button/button.component';

import { theme } from '../../styles/themes';
import alertIcon from '../../assets/icons/toast-alert.png';
import * as S from './confirm-popup.styles';
import { useTranslation } from 'react-i18next';

const ConfirmPopup = ({ onConfirm, onCancel, children, showPopup }) => {
  const {t} = useTranslation()
  return (
    <S.ConfirmPopupDiv
      role="alertdialog"
      aria-labelledby="alert-message"
      aria-describedby="alert-message"
      data-testid="confirm-popup"
      showPopup={showPopup}
    >
      <img src={alertIcon} alt="confirm alert" />
      <p id="alert-message">{children}</p>
      <S.ConfirmPopupBtns>
        <Button size={BUTTON_SIZES.SMALL} callback={onConfirm}>
        {t("labels.confirm")}
        </Button>
        <Button
          size={BUTTON_SIZES.SMALL}
          color={theme.colors.secondary}
          callback={onCancel}
        >
         {t("labels.cancel")}
        </Button>
      </S.ConfirmPopupBtns>
    </S.ConfirmPopupDiv>
  );
};

export default ConfirmPopup;
