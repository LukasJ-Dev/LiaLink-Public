import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserProfileVisibility } from '../../store/features/user/user.selectors';
import { updateUserProfileVisibilityAsync } from '../../store/features/user/user.slice';

import SetInfo from '../../components/set-info/set-info.component';
import SetProfilePic from '../../components/set-profile-pic/set-profile-pic.component';
import SetSkills from '../../components/set-skills/set-skills.component';
import SettingsHeader from '../../components/settings-header/settings-header.component';
import SetupNav from '../../components/setup-nav/setup-nav.component';
import UploadCv from '../../components/upload-cv/upload-cv.component';

import * as S from './update-profile.styles';
import { useTranslation } from 'react-i18next';

const navItems = ['Info', 'Skills', 'Picture', 'CV'];

const UpdateProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState(+page);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  return (
    <>
      <S.SetUpContainer>
        <S.HeadingContainer>
          <SettingsHeader callback={() => navigate('/settings')}>
            {t('labels.update_profile')}
          </SettingsHeader>
          <SetupNav
            currentPage={currentPage}
            navItems={navItems}
            callback={handleChangePage}
          />
        </S.HeadingContainer>

        <main>
          {currentPage === 0 && (
            <SetInfo callback={() => handleChangePage(1)} />
          )}
          {currentPage === 1 && (
            <SetSkills callback={() => handleChangePage(2)} />
          )}
          {currentPage === 2 && (
            <SetProfilePic callback={() => handleChangePage(3)} />
          )}
          {currentPage === 3 && <UploadCv callback={() => navigate('/jobs')} />}
        </main>
      </S.SetUpContainer>
    </>
  );
};

export default UpdateProfile;
