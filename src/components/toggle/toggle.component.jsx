import { useEffect, useState } from 'react';

import * as S from './toggle.styles';

const Toggle = ({ textOn, textOff, callback, isOnInitial }) => {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    setIsOn(isOnInitial);
  }, []);

  const handleClick = e => {
    if (e.key && e.key !== 'Enter') return;

    setIsOn(previousValue => {
      callback(!previousValue);
      return !previousValue;
    });
  };

  return (
    <S.ToggleContainer>
      <span data-testid="toggle-text" tabIndex={0}>
        {isOn ? textOn : textOff}
      </span>
      <S.ToogleOutside
        className={className => (S.ToogleOutside.styledComponentId = className)}
        aria-checked={isOn}
        aria-label="Toggle profile visible"
        type="button"
        role="switch"
        onClick={handleClick}
        tabIndex={0}
        data-testid="inner-toggle"
        isOn={isOn}
        onKeyDown={handleClick}
      ></S.ToogleOutside>
    </S.ToggleContainer>
  );
};

export default Toggle;
