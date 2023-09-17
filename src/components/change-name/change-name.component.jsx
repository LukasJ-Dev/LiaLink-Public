import { useDispatch } from 'react-redux';

import { saveUserDisplayNameAsync } from '../../store/features/user/user.slice';

import Button from '../button/button.component';
import Form from '../form-component/form.component';
import FormInput from '../form-input/form-input.component';

import * as S from './change-name.styles';
import { FloppyDisk } from '@phosphor-icons/react';
import nameDraw from '../../assets/illustrations/username.svg';
import { useTranslation } from 'react-i18next';

const ChangeName = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();

  const handleSubmit = formFields => {
    const { name } = formFields;
    dispatch(saveUserDisplayNameAsync(name));
  };

  return (
    <>
      <S.ChangeNameContainer>
        <S.ImgContainer>
          <S.StyledImg
            tabIndex={0}
            src={nameDraw}
            alt="Woman holding an information card"
          />
        </S.ImgContainer>
        <Form
          button={
            <Button
              iconLeft={
                <FloppyDisk size={24} weight="bold" aria-hidden="true" />
              }
              type="submit"
            >
              {t("labels.save")}
            </Button>
          }
          submitHandler={handleSubmit}
          id="change-name"
        >
          <FormInput label={t("new_user_name")} required name="name" />
        </Form>
      </S.ChangeNameContainer>
    </>
  );
};

export default ChangeName;
