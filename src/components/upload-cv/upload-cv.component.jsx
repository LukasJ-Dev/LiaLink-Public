import { useDispatch, useSelector } from 'react-redux';

import {
  deleteCvAsync,
  saveUserCVAsync,
} from '../../store/features/user/user.slice';
import { selectCVData } from '../../store/features/user/user.selectors';

import SavedCv from '../saved-cv/saved-cv.component';
import Button from '../button/button.component';
import ToastNotification from '../toaster/toaster.component';

import * as S from './upload-cv.styles';
import { theme } from '../../styles/themes';
import cvPageImg from '../../assets/illustrations/upload.svg';
import { ArrowRight, UploadSimple } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const UploadCv = ({ callback }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cvData = useSelector(selectCVData);
  const openFileUpload = () => document.getElementById('cv-upload').click();

  const handleCVUpload = e => {
    const cv = e.target.files[0];
    if (cv.size > 10000000) {
      ToastNotification(t('toasts.file_exceed_10mb'));
      // alert("Your file exceeds the 10mb limit!");
      return;
    }
    if (cv.type !== 'application/pdf') {
      ToastNotification(t('toasts.cv_mustbe_pdf'));
      // alert('Your cv must be in the format ".pdf"');
      return;
    }
    // const fileUrl = URL.createObjectURL(file);

    dispatch(saveUserCVAsync(cv));
  };

  const handleDeleteCv = fileName => {
    dispatch(deleteCvAsync(fileName));
  };
  const handleFinishedSetup = () => {
    if (callback) {
      ToastNotification('Setup finished!', true);
    }

    setTimeout(() => {
      callback();
    }, 1500);
  };
  return (
    <S.UploadCvContainer>
      <S.ImgContainer>
        <img tabIndex={0} src={cvPageImg} alt="Documents and a plus icon" />
      </S.ImgContainer>
      <S.UploadSectionContainer>
        <h2 tabIndex={0}>Upload your CV</h2>
        <Button
          iconLeft={<UploadSimple size={24} weight="bold" />}
          callback={openFileUpload}
        >
          {t('labels.upload_file')}
        </Button>
        <input onChange={handleCVUpload} id="cv-upload" type="file" />
      </S.UploadSectionContainer>

      {cvData?.fileName && (
        <>
          <S.UploadSectionContainer>
            <h2 tabIndex={0}>Saved CVs</h2>
            <SavedCv data={cvData} callbackDeleteCv={handleDeleteCv} />
          </S.UploadSectionContainer>
          <Button
            iconRight={<ArrowRight size={24} weight="bold" />}
            callback={handleFinishedSetup}
            color={theme.colors.secondary}
          >
            {t('labels.finish_setup')}
          </Button>
        </>
      )}
    </S.UploadCvContainer>
  );
};

export default UploadCv;
