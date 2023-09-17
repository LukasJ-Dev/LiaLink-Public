import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  signInWithEmailAsync,
  signInWithGoogleAsync,
} from "../../store/features/user/user.slice";
import { selectSignInSuccess } from "../../store/features/user/user.selectors";

import Form from "../../components/form-component/form.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import SettingsHeader from "../../components/settings-header/settings-header.component";

import * as S from "./sign-in.styles";
import googleIcon from "../../assets/icons/google-color.png";
import { IconButtonContainer } from "../../components/jobs-list/jobs-list.styles";
import { PageContainer } from "../../styles/mixins";
import { useTranslation } from "react-i18next";
import ToastNotification from "../../components/toaster/toaster.component";
const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInSuccess = useSelector(selectSignInSuccess);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (formFields) => {
    await dispatch(signInWithEmailAsync(formFields));
    setShowToast(true);
  };

  const handleSignInWithGoogle = async (e) => {
    await dispatch(signInWithGoogleAsync());
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      if (signInSuccess) {
        setTimeout(() => {
          ToastNotification("Successfully signed in", true);
          navigate("/jobs");
          setShowToast(false);
        }, 1000);
      } else {
        return;
      }
    }
  }, [showToast, signInSuccess]);

  return (
    <PageContainer>
      <S.SignInContainer>
        <SettingsHeader callback={() => navigate("/")}>Sign in</SettingsHeader>
        <S.TextContainer>
          <h1 tabIndex={0}>Welcome back!</h1>
          <p tabIndex={0}>Log in with your email and password.</p>
        </S.TextContainer>
        <Form
          submitHandler={handleSubmit}
          button={
            <Button type="submit" isLoading={showToast}>
              {t("labels.log_in")}
            </Button>
          }
        >
          <FormInput label="Your email" type="email" required name="email" />
          <FormInput
            label="Your password"
            type="password"
            required
            name="password"
          />
        </Form>

        <S.LineContainer>
          <p>{t("labels.or_sign_with")}</p>
        </S.LineContainer>
        <IconButtonContainer
          onClick={handleSignInWithGoogle}
          tabIndex={0}
          aria-label="Sign up or Sign in with Google"
          id="google-sign-in"
        >
          <img aria-hidden="true" src={googleIcon} alt="Google icon" />
        </IconButtonContainer>

        <S.BottomTextContainer
          onKeyDown={(e) => e.key === "Enter" && navigate("/sign-up")}
          onClick={() => navigate("/sign-up")}
          tabIndex={0}
          role="link"
          aria-label="Don't have an account? Click to sign up."
        >
          <span>{t("labels.dont_have_acc")}&nbsp;</span>
          <span>{t("labels.sign_up")}</span>
        </S.BottomTextContainer>
      </S.SignInContainer>
    </PageContainer>
  );
};

export default SignIn;
