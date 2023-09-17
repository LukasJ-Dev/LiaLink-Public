import { useDispatch } from 'react-redux';

import { changeUserEmailAsync } from '../../store/features/user/user.slice';

import Button from '../button/button.component';
import Form from '../form-component/form.component';
import FormInput from '../form-input/form-input.component';
import ToastNotification from '../toaster/toaster.component';

import * as S from './change-email.styles';
import emailImg from '../../assets/illustrations/email.svg';
import { FloppyDisk } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const ChangeEmail = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();

  const handleSubmit = formFields => {
    const { newEmail, confirmEmail, password } = formFields;
    if (newEmail !== confirmEmail) {
      ToastNotification(t("toasts.email_no_match"));
      return;
    }
    dispatch(changeUserEmailAsync(newEmail, password));
  };

  return (
    <S.ChangeEmailContainer>
      <S.ImgContainer>
        <S.StyledImg
          src={emailImg}
          alt="Woman holding an email icon next to her phone"
          tabIndex={0}
        />
      </S.ImgContainer>
      <Form
        submitHandler={handleSubmit}
        button={
          <Button
            type="submit"
            iconLeft={<FloppyDisk size={24} weight="bold" aria-hidden="true" />}
          >
            {t("labels.save")}
          </Button>
        }
      >
        <FormInput
          type="email"
          label= {t("labels.new_email")}
          required
          name="newEmail"
          aria-label="newEmail"
        ></FormInput>
        <FormInput
          type="email"
          label={t("labels.confirm_new_email")}
          required
          name="confirmEmail"
          aria-label="confirmEmail"
        ></FormInput>
        <FormInput
          type="password"
          label={t("labels.password")}
          required
          name="password"
          aria-label="password"
        ></FormInput>
      </Form>
    </S.ChangeEmailContainer>
  );
};

export default ChangeEmail;
