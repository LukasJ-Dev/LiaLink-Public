import { useDispatch } from 'react-redux';

import { changeUserPasswordAsync } from '../../store/features/user/user.slice';

import Button from '../button/button.component';
import Form from '../form-component/form.component';
import FormInput from '../form-input/form-input.component';
import ToastNotification from '../toaster/toaster.component';

import * as S from './change-pass.styles';
import passImg from '../../assets/illustrations/password.svg';
import { FloppyDisk } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const ChangePass = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const handleSubmit = ({ oldPass, newPass, confirmPass }) => {
    if (newPass !== confirmPass) {
      ToastNotification(t("password_no_match"));
      return;
    }
    dispatch(changeUserPasswordAsync(oldPass, newPass));
  };

  return (
    <S.ChangePassContainer>
      <S.ImgContainer>
        <S.StyledImg
          src={passImg}
          alt="Man standing next to a security icon"
          tabIndex={0}
        />
      </S.ImgContainer>
      <Form
        submitHandler={handleSubmit}
        button={
          <Button
            iconLeft={<FloppyDisk size={24} weight="bold" aria-hidden="true" />}
          >
            {t("labels.save")}
          </Button>
        }
      >
        <FormInput
          type="password"
          label={t("labels.old_password")}
          required
          name="oldPass"
        ></FormInput>
        <FormInput
          type="password"
          label={t("labels.new_password")}
          required
          name="newPass"
        ></FormInput>
        <FormInput
          type="password"
          label={t("labels.repeat_new_password")}
          required
          name="confirmPass"
        ></FormInput>
      </Form>
    </S.ChangePassContainer>
  );
};

export default ChangePass;
