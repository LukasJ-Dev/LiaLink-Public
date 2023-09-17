import uniqid from 'uniqid';

import * as S from './input-radio.styles';

const RadioInput = ({ checked, callback, label, id = uniqid() }) => {
  return (
    <S.CheckboxContainer checked={checked}>
      <div />
      <input
        tabIndex={0}
        id={id}
        onChange={callback}
        type="checkbox"
        onKeyDown={e => e.key === 'Enter' && callback()}
        checked={checked}
        aria-label={label}
      />
      <label htmlFor={label}>{label}</label>
    </S.CheckboxContainer>
  );
};

export default RadioInput;
