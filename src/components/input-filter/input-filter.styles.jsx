import styled from 'styled-components';
import {
  bodyMediumRegular,
  bodySmallRegular,
  theme,
} from '../../styles/themes';

export const Container = styled.div`
  position: relative;
  z-index: 10;
`;

export const List = styled.ul`
  ${bodyMediumRegular}
  color: ${theme.colors.grayDarkest};
  background-color: #fff;
  width: 100%;
  margin-top: ${theme.spacing.sp1};
  border: 1px solid #fff;
  border-radius: 0 0 10px 10px;
  max-height: 30rem;
  overflow: scroll;

  li {
    padding: ${theme.spacing.sp2} ${theme.spacing.sp4};

    &:hover {
      background-color: ${theme.colors.grayLightest};
    }
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100%;
`;

export const AddButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 15;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${theme.spacing.sp6};
  border-radius: 0 10px 0 0;

  ${bodySmallRegular}

  color: #fff;
  font-weight: 700;
  background-color: ${theme.colors.primary};
  cursor: pointer;
`;

export const FormInputContainer = styled.div`
  position: relative;
`;
