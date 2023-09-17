import styled, { keyframes } from 'styled-components';
import { theme, bodySmallRegular } from '../../styles/themes';

export const ConfirmPopupDiv = styled.div`
  position: fixed;
  top: -25rem;
  left: 50%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: ${theme.padding.large};

  ${bodySmallRegular}

  background: #fff;
  width: 90vw;
  max-width: 40rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.boxShadow.large};
  ${({ showPopup }) => {
    if (showPopup === 'true')
      return 'animation: slideDown 0.5s ease-in-out forwards;';

    if (showPopup === 'false')
      return 'animation: slideUp 0.5s ease-in-out forwards;';
  }}

  @keyframes slideUp {
    from {
      transform: translate(-50%, calc(50% + 50vh));
    }
    to {
      transform: translate(-50%, 0);
    }
  }

  @keyframes slideDown {
    from {
      transform: translate(-50%, 0);
    }
    to {
      transform: translate(-50%, calc(50% + 50vh));
    }
  }

  p {
    text-align: center;
  }
`;

export const ConfirmPopupBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
