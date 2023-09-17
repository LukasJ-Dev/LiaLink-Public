import { useNavigate } from 'react-router';

import Button from '../../components/button/button.component';

import * as S from './start-page.styles';
import { theme } from '../../styles/themes';
import StartPageImg from '../../assets/illustrations/start-page.svg';
import { BottomTextContainer } from '../sign-in/sign-in.styles';
import Logo from '../../assets/icons/Lialinkkedja2.svg';
import { useTranslation } from 'react-i18next';
const StartPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <S.StartPageContainer>
      <S.IllustrationContainer>
        <S.LogoContainer tabIndex={0} src={Logo} alt="Lia Link Logo" />

        <img
          tabIndex={0}
          src={StartPageImg}
          alt="People working with computers"
        />
      </S.IllustrationContainer>
      <S.HeadingTextContainer>
        <h1 tabIndex={0}>Find your tech LIA with ease!</h1>
        <p tabIndex={0}>Log in to get started or just browse.</p>
      </S.HeadingTextContainer>
      <S.ButtonContainer>
        <Button callback={() => navigate('/sign-in')}>
          {t('labels.log_in')}
        </Button>
        <Button
          callback={() => navigate('/jobs')}
          color={theme.colors.secondary}
        >
          {t('labels.browse_jobs')}
        </Button>
      </S.ButtonContainer>
      <BottomTextContainer
        onClick={() => navigate('/sign-up')}
        tabIndex={0}
        role="link"
        aria-label="Don't have an account? Click to sign up."
      >
        <span>{t('labels.dont_have_acc')}&nbsp;</span>
        <span>{t('labels.sign_up')}</span>
      </BottomTextContainer>
    </S.StartPageContainer>
  );
};

export default StartPage;
