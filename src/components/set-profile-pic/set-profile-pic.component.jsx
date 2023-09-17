import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';

import { saveUserImgDataAsync } from '../../store/features/user/user.slice';

import { theme } from '../../styles/themes';
import * as S from './set-profile-pic.styles';
import { selectImgData } from '../../store/features/user/user.selectors';
import { ArrowRight, Plus, UploadSimple } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const initialOffset = [0, 0];

const SetProfilePic = ({ callback }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const savedImgData = useSelector(selectImgData);

  const [mode, setMode] = useState('upload');
  const [imgUrl, setImgUrl] = useState(null);
  const [offset, setOffset] = useState(initialOffset);
  const [initOffset, setInitOffset] = useState(offset);
  const [zoom, setZoom] = useState(100);
  const [imgFile, setImgFile] = useState(null);

  useEffect(() => {
    if (!savedImgData?.imgUrl) return;

    const { imgUrl, offset, zoom } = savedImgData;
    setImgUrl(imgUrl);
    setOffset(offset);
    setZoom(zoom);
  }, []);

  const openFileUpload = () => document.getElementById('upload-img').click();

  const handleImgUpload = e => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgUrl(imgUrl);
    setImgFile(file);
    resetValues();
    setMode('edit');
  };

  const handleStart = e => {
    if (mode !== 'edit') return;

    const pageCoords = [e.targetTouches[0].pageX, e.targetTouches[0].pageY];
    setInitOffset(offset.map((coord, i) => pageCoords[i] - coord));
  };

  const handleMove = e => {
    if (mode !== 'edit') return;

    if (e.targetTouches.length === 1) {
      const pageCoords = [e.targetTouches[0].pageX, e.targetTouches[0].pageY];
      setOffset(pageCoords.map((coord, i) => coord - initOffset[i]));
    }
    if (e.targetTouches.length > 1) {
      e.preventDefault();
    }
  };

  const handleZoom = e => {
    setZoom(e.target.value);
  };

  const resetValues = () => {
    setOffset(initialOffset);
    setZoom(100);
  };

  const getImgData = () => {
    return {
      zoom,
      offset,
      imgUrl,
    };
  };

  const handleSave = () => {
    if (mode === 'edit') {
      const imgData = getImgData();

      dispatch(saveUserImgDataAsync(imgData, imgFile));
    }
    callback();
  };

  return (
    <S.SetProfilePicContainer>
      <S.ImgContainer>
        <S.EditModeContainer>
          {imgUrl ? (
            <S.EditImgContainer
              tabIndex={0}
              aria-label="Touch and drag to reposition your picture"
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
            >
              <S.ProfileImg
                zoom={zoom}
                offset={offset}
                src={imgUrl}
                alt="Your profile Pic"
              />
              {mode === 'edit' && (
                <S.StyledGuideIcon
                  aria-hidden="true"
                  size={150}
                  weight="thin"
                  color={theme.colors.grayLightest}
                />
              )}
            </S.EditImgContainer>
          ) : (
            <>
              <Plus size={50} color={theme.colors.grayMedium} />
              <p tabIndex={0}>Upload an image</p>
            </>
          )}
        </S.EditModeContainer>
      </S.ImgContainer>
      <S.RangeInput
        aria-label=">Zoom in or out"
        disabled={mode !== 'edit'}
        onChange={handleZoom}
        type="range"
        min={100}
        max={300}
        step={5}
        value={zoom}
      />
      <S.ButtonContainer>
        {mode !== 'edit' && imgUrl && (
          <Button callback={() => setMode('edit')}>Edit</Button>
        )}

        <Button
          iconLeft={<UploadSimple size={24} weight="bold" />}
          callback={openFileUpload}
        >
          {t('labels.upload_image')}
        </Button>
        {imgUrl && (
          <Button
            color={theme.colors.secondary}
            callback={handleSave}
            iconRight={<ArrowRight size={24} weight="bold" />}
          >
            {t('labels.save_and_continue')}
          </Button>
        )}
        <input
          data-testid="file-input"
          onChange={handleImgUpload}
          id="upload-img"
          type="file"
        />
      </S.ButtonContainer>
    </S.SetProfilePicContainer>
  );
};

export default SetProfilePic;
