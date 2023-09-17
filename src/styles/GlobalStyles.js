import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    list-style: none;
    
  }
  .react-hot-toast-icon {
    &::before,
    &::after {
      width: 0;
    }
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }
  
  #root {
    max-width: 140rem;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #eee;
  }

  button {
    border: none;
    cursor: pointer;
    font-weight: 500;
${
  '' /*      
     &:focus {
      outline: none;
     } */
}

  }

  a {
    text-decoration: none;
    color: blue;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    width: 100%;

    &::-webkit-slider-runnable-track {
      background: ${theme.colors.white};
      height: 1rem;
      box-shadow: 0 .2rem .2rem rgba(0, 0,0 , .2),inset 0 .1rem .4rem rgba(0, 0,0 , .1);
      border-radius: 10px;
    }

    &::-moz-range-track {
      background: ${theme.colors.white};
      height: 1rem;
      box-shadow: 0 .2rem .2rem rgba(0, 0,0 , .2);
      border-radius: 10px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 2rem;
      width: 2rem;
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      margin-top: -5px;
      box-shadow: 0 .4rem .4rem rgba(0, 0,0 , .3);
    }

      &:focus::-webkit-slider-thumb {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: .3rem;
      }

    &::-moz-range-thumb {
      border: none;
      height: 2rem;
      width: 2rem;
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      margin-top: -5px;
      box-shadow: 0 .4rem .4rem rgba(0, 0,0 , .3);
    }
    &:focus::-moz-range-thumb {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: .3rem;
      }

      &:disabled {
        opacity: .4;
      }
  }

`;

export default GlobalStyles;
