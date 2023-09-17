import { useState } from 'react';

import uniqid from 'uniqid';

import FormInput from '../form-input/form-input.component';

import * as S from './input-filter.styles';

const InputFilter = ({
  list,
  label,
  name,
  id = uniqid(),
  buttonLabel,
  callback,
}) => {
  const [listItems, setlistItems] = useState(list);
  const [option, setOption] = useState(null);
  const [value, setValue] = useState(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilter = (value = null) => {
    setIsModalOpen(true);
    setIsListOpen(true);
    setValue(value);
    if (value) {
      const filteredList = list.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setlistItems(filteredList);
    }
    if (!value) setlistItems(list);
  };

  const handleSelectItem = item => {
    setOption(item);
    setValue(item);
    setIsListOpen(false);
  };

  const handleClickModal = () => {
    setIsModalOpen(false);
    setIsListOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.FormInputContainer>
          <FormInput
            id={id}
            validIcon={false}
            label={label}
            name={name}
            select={true}
            callback={handleFilter}
            option={option}
          ></FormInput>
          {buttonLabel && (
            <S.AddButton
              role="button"
              aria-label={buttonLabel}
              onClick={() => callback(value)}
              onKeyDown={e => e.key === 'Enter' && callback(value)}
              tabIndex={0}
            >
              {buttonLabel}
            </S.AddButton>
          )}
        </S.FormInputContainer>
        {isListOpen && (
          <S.List data-testid="options-box">
            {listItems.map(item => (
              <li
                onClick={() => handleSelectItem(item)}
                value={item}
                key={item}
                role="option"
                id={`listbox-${id}-${item}`}
                tabIndex={0}
              >
                {item}
              </li>
            ))}
          </S.List>
        )}
      </S.Container>
      {isModalOpen && (
        <S.Modal data-testid="overlay" onClick={handleClickModal}></S.Modal>
      )}
    </>
  );
};

export default InputFilter;
