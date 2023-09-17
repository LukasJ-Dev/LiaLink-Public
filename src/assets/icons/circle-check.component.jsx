import * as React from "react";

const CircleCheck = ({ stroke = "#4CAF50", strokeWidth = 2 }) => (
  <svg width={47} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38.7233 22.2054V23.5652C38.7214 26.7524 37.6894 29.8535 35.7811 32.4063C33.8728 34.959 31.1904 36.8264 28.134 37.7301C25.0776 38.6337 21.811 38.5252 18.8214 37.4207C15.8317 36.3162 13.2792 34.2748 11.5445 31.6011C9.80979 28.9274 8.98585 25.7645 9.19555 22.5843C9.40526 19.404 10.6374 16.3767 12.7081 13.9539C14.7789 11.5311 17.5774 9.84264 20.6862 9.14025C23.795 8.43785 27.0476 8.75921 29.9588 10.0564M38.7233 11.7328L23.9434 26.5275L19.5094 22.0935"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleCheck;
