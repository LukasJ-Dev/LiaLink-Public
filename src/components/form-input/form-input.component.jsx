import { useEffect, useState } from 'react';

import uniqid from 'uniqid';

import * as S from './form-input.styles';
import { IconButtonContainer } from '../../styles/mixins';
import { theme } from '../../styles/themes';
import { Eye, EyeClosed } from '@phosphor-icons/react';

/*
props = {
  label: String - label text
  type: String (default = 'text') - input "type" prop
  required: Boolean (default = false)
  name: String - short name to define the field
  validIcon: Boolean (default = true) - if you want the green check if field is valid 
  data: Object (default = null) - previous
}
*/

const FormInput = ({
  label,
  validIcon = true,
  type = 'text',
  data = null,
  id = uniqid(),
  callback = null,
  select = false,
  option = null,
  name,
  ...otherProps
}) => {
  const [formField, setFormField] = useState({ key: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!data) return;

    if (data[name]) {
      document.getElementById(id).value = data[name];
      setFormField({ key: data[name] });
    }
  }, []);

  useEffect(() => {
    if (!option) return;
    setFormField({ key: option });
    document.getElementById(id).value = option;
  }, [option]);

  const handleLabelClick = e => {
    e.target.nextElementSibling.focus();
    select && callback();
  };

  const handleChange = e => {
    const { value } = e.target;
    setFormField({ key: value });
    select && callback(value);
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.InputAndLabel>
      {label && (
        <S.Label
          onClick={handleLabelClick}
          shrink={formField.key.length}
          htmlFor={id}
        >
          {label}
        </S.Label>
      )}
      {type === 'textarea' && (
        <S.Textarea
          id={id}
          wrap="hard"
          cols={20}
          type={showPassword === true ? 'text' : type}
          onChange={handleChange}
          hasText={formField.key.length}
          name={name}
          {...otherProps}
        ></S.Textarea>
      )}
      {type !== 'textarea' && (
        <S.Input
          id={id}
          minLength={type === 'password' ? 8 : 0}
          type={showPassword === true ? 'text' : type}
          onChange={handleChange}
          hasText={formField.key.length}
          select={select}
          name={name}
          role={select ? 'listbox' : 'textbox'}
          {...otherProps}
        ></S.Input>
      )}

      {validIcon && (
        <S.StyledValidIcon
          size={24}
          color={theme.colors.secondary}
          weight="bold"
          role="status"
          aria-label="The input field is valid"
        />
      )}
      <S.IconRightContainer type={type}>
        {type === 'password' && showPassword && (
          <IconButtonContainer
            aria-label="Hide password"
            onClick={handleEyeClick}
          >
            <Eye aria-hidden="true" size={24} color="#555" />
          </IconButtonContainer>
        )}
        {type === 'password' && !showPassword && (
          <IconButtonContainer
            aria-label="Show password"
            onClick={handleEyeClick}
          >
            <EyeClosed size={24} aria-hidden="true" />
          </IconButtonContainer>
        )}
      </S.IconRightContainer>
    </S.InputAndLabel>
  );
};

export default FormInput;
