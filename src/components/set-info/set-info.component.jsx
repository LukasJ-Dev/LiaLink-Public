import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_SIZES } from '../button/button.component';
import Form from '../form-component/form.component';
import FormInput from '../form-input/form-input.component';

import { selectProfileInfo } from '../../store/features/user/user.selectors';
import {
  saveUserProfileInfoAsync,
  setUserLocationByCityAsync,
  setUserLocationByCoordsAsync,
} from '../../store/features/user/user.slice';

import * as S from './set-info.styles';
import { theme } from '../../styles/themes';
import { ArrowRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const SetInfo = ({ callback }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const profileInfo = useSelector(selectProfileInfo);

  const handleSubmit = async formFields => {
    if (formFields.city.length && profileInfo.city === formFields.city) {
      const newFields = { ...formFields, coords: profileInfo.coords };
      dispatch(saveUserProfileInfoAsync(newFields));
    }
    if (formFields.city.length && profileInfo.city !== formFields.city)
      dispatch(setUserLocationByCityAsync(formFields));

    if (!formFields.city) dispatch(saveUserProfileInfoAsync(formFields));
    callback();
  };

  const getLocation = () => {
    dispatch(setUserLocationByCoordsAsync());
  };
  if (!profileInfo) return;
  return (
    <S.SetInfoContainer>
      <Form
        id="info"
        submitHandler={handleSubmit}
        button={
          <Button
            type="submit"
            color={theme.colors.secondary}
            iconRight={<ArrowRight size={24} weight="bold" />}
          >
            {t('labels.save_and_continue')}
          </Button>
        }
      >
        <section>
          <h2 tabIndex={0}>About yourself</h2>
          <FormInput
            data={profileInfo}
            label={t('labels.your_name')}
            required
            name="name"
          />
          <FormInput
            data={profileInfo}
            label={t('labels.your_email')}
            name="email"
            type="email"
          />
          <FormInput data={profileInfo} label="Your city" name="city" />
          <p>or</p>
          <Button size={BUTTON_SIZES.X_SMALL} callback={getLocation}>
            Use my location
          </Button>
          <FormInput
            data={profileInfo}
            type="textarea"
            label={t('labels.your_bio')}
            name="bio"
          />
        </section>
        <section>
          <h2 tabIndex={0}>About your school</h2>

          <FormInput
            data={profileInfo}
            label={t('labels.your_school')}
            required
            name="school"
          />
          <FormInput
            data={profileInfo}
            label={t('labels.your_course')}
            name="course"
          />
          <FormInput
            data={profileInfo}
            label={t('labels.your_lia_period')}
            name="period"
          />
        </section>
        <section>
          <h2 tabIndex={0}>Your links</h2>
          <FormInput
            data={profileInfo}
            label={t('labels.your_portfolio')}
            name="portfolio"
          />
          <FormInput
            data={profileInfo}
            label={t('labels.your_github')}
            name="github"
          />
          <FormInput
            data={profileInfo}
            label={t('labels.your_linkedin')}
            name="linkedin"
          />
        </section>
      </Form>
    </S.SetInfoContainer>
  );
};

export default SetInfo;
