import * as React from "react";

const ErrorSvg = ({ stroke = "#FFFFFF", strokeWidth = 2 }) => (
  <svg width={47} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#EA4335" r="23.5" cy="24" cx="23.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      stroke={stroke}
      d="m28.5,20l-9,9m0,-9l9,9m10.5,-4.5c0,8.2843 -6.7157,15 -15,15c-8.2843,0 -15,-6.7157 -15,-15c0,-8.2843 6.7157,-15 15,-15c8.2843,0 15,6.7157 15,15z"
    />
  </svg>
);

export default ErrorSvg;
