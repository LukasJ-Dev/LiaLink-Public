import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  signInWithGoogleAsync,
  signUpWithEmailAsync,
} from "../../store/features/user/user.slice";

import SettingsHeader from "../../components/settings-header/settings-header.component";
import Form from "../../components/form-component/form.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import ToastNotification from "../../components/toaster/toaster.component";

import * as S from "../sign-in/sign-in.styles";
import googleIcon from "../../assets/icons/google-color.png";
import { IconButtonContainer } from "../../components/jobs-list/jobs-list.styles";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (formFields) => {
    const { password, confirm } = formFields;

    if (password !== confirm) {
      ToastNotification("Passwords does not match!");
      return;
    }

    await dispatch(signUpWithEmailAsync(formFields));
    setShowToast(true);
    setTimeout(() => {
      navigate("/set-up");
      ToastNotification("Account created!", true, 3000);
      setShowToast(false);
    }, 1000);
  };

  const handleSignUpWithGoogle = async (e) => {
    await dispatch(signInWithGoogleAsync());
    setShowToast(true);

    setTimeout(() => {
      navigate("/set-up");
      ToastNotification("Account created!", true, 3000);
      setShowToast(false);
    }, 1000);
  };

  return (
    <S.SignInContainer>
      <SettingsHeader callback={() => navigate("/")}>Sign up</SettingsHeader>
      <S.TextContainer>
        <h1 tabIndex={0}>Welcome!</h1>
        <p tabIndex={0}>Sign up with your email and password.</p>
      </S.TextContainer>
      <Form
        submitHandler={handleSubmit}
        button={
          <Button type="submit" isLoading={showToast}>
            Sign Up
          </Button>
        }
      >
        <FormInput
          label="Choose a user name"
          type="text"
          required
          name="name"
        />
        <FormInput label="Your email" type="email" required name="email" />
        <FormInput
          label="Choose a password"
          type="password"
          required
          name="password"
        />
        <FormInput
          label="Confirm your password"
          type="password"
          required
          name="confirm"
        />
      </Form>

      <S.LineContainer>
        <p>or sign up with</p>
      </S.LineContainer>
      <IconButtonContainer
        onClick={handleSignUpWithGoogle}
        tabIndex={0}
        aria-label="Sign up or Sign in with Google"
        id="google-sign-up"
      >
        <img aria-hidden="true" src={googleIcon} alt="Google icon" />
      </IconButtonContainer>

      <S.BottomTextContainer
        onClick={() => navigate("/sign-in")}
        tabIndex={0}
        role="link"
        aria-label="Don't have an account? Click to sign up."
      >
        <span>Already have an account? </span>
        <span>Sign in</span>
      </S.BottomTextContainer>
    </S.SignInContainer>
  );
};

export default SignUp;
