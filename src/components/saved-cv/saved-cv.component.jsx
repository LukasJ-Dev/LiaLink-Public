import * as S from './saved-cv.styles';
import { IconButtonContainer } from '../jobs-list/jobs-list.styles';
import { Trash } from '@phosphor-icons/react';
import { theme } from '../../styles/themes';

const SavedCv = ({ data, callbackDeleteCv }) => {
  return (
    <S.SavedCvContainer>
      <S.FileContainer>
        <a href={data.cvUrl} target="_blank">
          <span>{data.fileName}</span>
        </a>
      </S.FileContainer>

      <IconButtonContainer
        aria-label="Remove File"
        onClick={() => callbackDeleteCv(data.fileName)}
      >
        <Trash size={30} color={theme.colors.grayDark} aria-hidden="true" />
      </IconButtonContainer>
    </S.SavedCvContainer>
  );
};

export default SavedCv;
