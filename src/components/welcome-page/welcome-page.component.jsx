import { useNavigate } from 'react-router';

import Button from '../button/button.component';
import { BUTTON_SIZES } from '../button/button.component';

import * as S from './welcome-page.styles';
import { theme } from '../../styles/themes';
import WelcomeImg from '../../assets/illustrations/welcomeImg.svg';
import { PageContainer } from '../../styles/mixins';
import { useTranslation } from 'react-i18next';

const WelcomePage = ({ setSignedUp }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <S.MainContainer>
      <S.HeaderContainer>
        <h1 tabIndex={0}>LiaLink</h1>
      </S.HeaderContainer>
      <PageContainer>
        <img tabIndex={0} alt="man waving hello" src={WelcomeImg} />
        <S.TextContainer>
          <h2 tabIndex={0}>Välkommen!</h2>
          <p tabIndex={0}>
            Välkommen till LiaLink som är dedikerad till att hjälpa studenter
            hitta Lärande i arbete (Lia)! Vi förstår hur viktigt det är för
            studenter att få möjlighet att tillämpa sin..
          </p>
        </S.TextContainer>
        <S.ButtonContainer>
          <Button
            callback={() => setSignedUp(false)}
            size={BUTTON_SIZES.MEDIUM}
            color={theme.colors.secondary}
          >
            {t('labels.create_profile')}
          </Button>
          <Button
            callback={() => navigate('/jobs')}
            size={BUTTON_SIZES.MEDIUM}
            color={theme.colors.primary}
          >
            {t('labels.create_profile_later')}
          </Button>
        </S.ButtonContainer>
      </PageContainer>
    </S.MainContainer>
  );
};

export default WelcomePage;
