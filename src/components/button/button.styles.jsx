import styled, { css } from "styled-components";
import { bodySmallRegular, theme } from "../../styles/themes";
import { StyledSpinner } from "../spinner/spinner.styles";
const smallBtn = css`
  width: fit-content;
  border-radius: ${theme.borderRadius.small};
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  box-shadow: ${theme.boxShadow.small};
  font-size: 1.4rem;
  line-height: 1.2rem;
  letter-spacing: 0.04em;
  height: 44px;
`;

const mediumBtn = css`
  gap: 1.6rem;
  width: 100%;
  max-width: 45rem;
  padding: 1.6rem;
  box-shadow: ${theme.boxShadow.medium};
  border-radius: ${theme.borderRadius.medium};
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.06em;
`;

const xSmallBtn = css`
  width: fit-content;
  border-radius: ${theme.borderRadius.small};
  gap: 0.6rem;
  padding: 1rem 1.2rem;
  box-shadow: ${theme.boxShadow.small};
  font-size: 1.4rem;
  line-height: 1.2rem;
  letter-spacing: 0.04em;
  height: 36px;
`;

const settingsBtn = css`
  font-size: 1.6rem;
  color: #333;
  justify-content: space-between;
  font-family: ${bodySmallRegular};
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const ButtonStyle = styled.button`
  ${({ size }) => {
    if (size === "x-small") return xSmallBtn;
    if (size === "small") return smallBtn;
    if (size === "medium") return mediumBtn;
  }}

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  color: #fff;

  font-family: ${theme.fontFamily.button};
  font-weight: 700;
  transition: all 0.3s;

  background-color: ${({ color }) => color};
  ${({ disabled }) => disabled && "opacity: .3"}
  ${({ duelIcon }) => duelIcon && settingsBtn}

  @media screen and (min-width: 28.125em) {
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const LeftIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => (size === "small" ? ".8rem" : "1.6rem")};
`;

export const ButtonSpinner = styled(StyledSpinner)`
  width: 30px;
  height: 30px;
`;
