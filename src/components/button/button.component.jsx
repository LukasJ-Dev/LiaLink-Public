import uniqid from "uniqid";

import { theme } from "../../styles/themes";
import * as S from "./button.styles";

export const BUTTON_SIZES = {
  X_SMALL: "x-small",
  SMALL: "small",
  MEDIUM: "medium",
  SETTINGS: "settings",
};

const Button = ({
  callback,
  children,
  color = theme.colors.primary,
  disabled = false,
  isLoading,
  iconLeft = null,
  iconRight = null,
  size = BUTTON_SIZES.MEDIUM,
  duelIcon = false,
  type = "button",
  id = uniqid(),
}) => {
  return (
    <S.ButtonStyle
      isLoading={isLoading}
      color={color}
      disabled={disabled}
      onClick={callback}
      size={size}
      duelIcon={duelIcon}
      type={type}
      id={id}
    >
      <S.LeftIconContainer>{iconLeft && iconLeft}</S.LeftIconContainer>
      {isLoading ? <S.ButtonSpinner /> : children}
      {iconRight && iconRight}
    </S.ButtonStyle>
  );
};

export default Button;
