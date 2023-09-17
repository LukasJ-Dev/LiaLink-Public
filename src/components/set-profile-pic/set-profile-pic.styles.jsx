import { Plus } from '@phosphor-icons/react';
import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const SetProfilePicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.sp7};

  width: 100%;
  max-width: 45rem;
  height: 100%;

  margin: 0 auto;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: ${theme.spacing.sp4};
`;

export const EditModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sp7};
  border: 3px solid ${theme.colors.white};
  border-radius: 50%;
  width: 30rem;
  background-color: ${theme.colors.white};
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: move;

  p {
    color: ${theme.colors.grayDark};
  }
`;

export const EditImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: contain;
`;

export const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: ${({ offset, zoom }) =>
    `translate(${offset[0]}px, ${offset[1]}px) scale(${zoom}%)`};
`;

export const StyledGuideIcon = styled(Plus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sp4};

  width: 100%;

  input {
    display: none;
  }
`;

export const RangeInput = styled.input`
  width: 80%;
  margin-bottom: ${theme.spacing.sp5};
`;
