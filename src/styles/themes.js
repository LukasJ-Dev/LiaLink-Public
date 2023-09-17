/*
  - FONT SIZE SYSTEM (px)
    10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

  - SPACING SYSTEM (px)
    2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

import { css } from "styled-components";

export const theme = {
  colors: {
    primary: "#FF5722",
    primaryTint1: "#FF8A5C",
    primaryTint2: "#FFBD96",
    primaryShade1: " #C43800",
    primaryShade2: " #921E00",
    primaryDisabled: "rgba(255, 86, 34, 0.3)",

    // secondary: '#77C861',
    secondary: "#408029",
    secondaryTint1: "#A5DC93",
    secondaryTint2: "#D1F1C4",
    secondaryShade1: "#539C38",
    secondaryShade2: "#2B6D1B",
    secondaryDisabled: "rgba(119, 200, 97, 0.3)",

    black: "#000",
    grayDarkest: "#333",
    grayDark: "#555",
    grayMedium: "#888",
    grayLight: "#aaa",
    grayLightest: "#eee",
    white: "#fff",
  },

  gradients: {
    primary: "linear-gradient(to right top, #FF5722  rgba(255, 87, 34, 0.75))",
    secondary:
      "linear-gradient(to right top, #77C861  rgba(76, 175, 80, 0.75))",
  },

  spacing: {
    sp1: ".2rem",
    sp2: ".4rem",
    sp3: ".8rem",
    sp4: "1.2rem",
    sp5: "1.6rem",
    sp6: "2.4rem",
    sp7: "3.2rem",
    sp8: "4.8rem",
    sp9: "6.4rem",
    sp10: "8rem",
    sp11: "9.6rem",
    sp12: "12.8rem",
    sp13: "15.2rem",
  },

  padding: {
    small: ".4rem .8rem",
    medium: "1.2rem 1.2rem",
    large: "3rem 2.4rem",
  },

  fontSize: {
    bodySmall: "1.2rem",
    bodyRegular: "1.6rem",
    bodyLarge: "1.8rem",
    headingSmall: "2rem",
    headingRegular: "2.4rem",
    headingLarge: "3.6rem",
  },

  boxShadow: {
    small: "0 3px 3px rgba(0, 0, 0, 0.3)",
    medium: "0 4px 4px rgba(0, 0, 0, 0.3)",
    large: "0 10px 10px rgba(0, 0, 0, 0.3)",
  },

  borderRadius: {
    small: "6px",
    medium: "10px",
    large: "15px",
  },

  fontFamily: {
    heading: "Poppins",
    body: "Open Sans",
    button: "Roboto",
  },
};

// TYPOGRAPHY

export const headingLargeBold = css`
  font-family: "Poppins";
  font-size: 3.6rem;
  line-height: 42px;
  letter-spacing: 1%;
  font-weight: 700;
`;

export const headingLargeRegular = css`
  font-family: "Poppins";
  font-size: 3.6rem;
  line-height: 44px;
  letter-spacing: -1%;
  font-weight: 400;
`;

export const headingMediumBold = css`
  font-family: "Poppins";
  font-size: 3rem;
  line-height: 36px;
  letter-spacing: 1%;
  font-weight: 700;
`;

export const headingMediumRegular = css`
  font-family: "Poppins";
  font-size: 3rem;
  line-height: 42px;
  letter-spacing: -1%;
  font-weight: 400;
`;

export const headingSmallBold = css`
  font-family: "Poppins";
  font-size: 2.4rem;
  line-height: 32px;
  letter-spacing: 0%;
  font-weight: 700;
`;

export const headingSmallRegular = css`
  font-family: "Poppins";
  font-size: 2.4rem;
  line-height: 34px;
  letter-spacing: 0%;
  font-weight: 400;
`;

export const headingXSmallBold = css`
  font-family: "Poppins";
  font-size: 2rem;
  line-height: 26px;
  letter-spacing: 1%;
  font-weight: 700;
`;

export const headingXSmallRegular = css`
  font-family: "Poppins";
  font-size: 2rem;
  line-height: 28px;
  letter-spacing: -1%;
  font-weight: 400;
`;

export const headingXXSmallRegular = css`
  font-family: "Poppins";
  font-size: 1.6rem;
  line-height: 22px;
  letter-spacing: 2%;
  font-weight: 400;
`;

export const headingXXXSmallRegular = css`
  font-family: "Poppins";
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: 2%;
  font-weight: 400;
`;

export const bodyLargeBold = css`
  font-family: "Open Sans";
  font-size: 2.4rem;
  line-height: 34px;
  letter-spacing: -2%;
  font-weight: 700;
`;

export const bodyLargeRegular = css`
  font-family: "Open Sans";
  font-size: 2.4rem;
  line-height: 34px;
  letter-spacing: 3%;
  font-weight: 400;
`;

export const bodyMediumBold = css`
  font-family: "Open Sans";
  font-size: 1.8rem;
  line-height: 26px;
  letter-spacing: 1%;
  font-weight: 700;
`;

export const bodyMediumRegular = css`
  font-family: "Open Sans";
  font-size: 1.8rem;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: 400;
`;

export const bodySmallBold = css`
  font-family: "Open Sans";
  font-size: 1.6rem;
  line-height: 24px;
  letter-spacing: 0%;
  font-weight: 700;
`;

export const bodySmallRegular = css`
  font-family: "Open Sans";
  font-size: 1.6rem;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 400;
`;

export const bodyxSmallRegular = css`
  font-family: "Open Sans";
  font-size: 1.4rem;
  line-height: 24px;
  letter-spacing: 2%;
  font-weight: 400;
`;
