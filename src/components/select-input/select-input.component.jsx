import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import * as S from './select-input.styles';

const SelectInput = ({ callback, optionsArray, initialValue, label }) => {
  const [value, setValue] = useState(initialValue);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const id = uniqid();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleOptionSelect = option => {
    setValue(option);
    callback(option);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById(label).focus();
  };

  return (
    <>
      <S.InputContainer>
        <S.StyledCaretDown
          onClick={handleToggleMenu}
          role="button"
          aria-label="open-menu"
          size={20}
        />
        <label htmlfor={label}>{label}</label>
        <input
          type="text"
          open={isMenuOpen}
          onClick={handleToggleMenu}
          id={label}
          name={label}
          value={value}
          readOnly
        />
        {isMenuOpen && (
          <ul>
            {optionsArray.map(option => (
              <li key={option} onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </S.InputContainer>
      {isMenuOpen && <S.Modal onClick={() => setIsMenuOpen(false)}></S.Modal>}
    </>
  );
};

export default SelectInput;
