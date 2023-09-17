import { useState } from 'react';
import { useNavigate } from 'react-router';

import SettingsHeader from '../../components/settings-header/settings-header.component';
import SetupNav from '../../components/setup-nav/setup-nav.component';
import ConfirmPopup from '../../components/confirm-popup/confirm-popup.component';
import SetProfilePic from '../../components/set-profile-pic/set-profile-pic.component';
import SetInfo from '../../components/set-info/set-info.component';
import UploadCv from '../../components/upload-cv/upload-cv.component';
import SetSkills from '../../components/set-skills/set-skills.component';
import WelcomePage from '../../components/welcome-page/welcome-page.component';

import * as S from './set-up.styles';
import { useTranslation } from 'react-i18next';
const navItems = ['Info', 'Skills', 'Picture', 'CV'];

const SetUp = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [showPopup, setShowPopup] = useState('');
  const [signedUp, setSignedUp] = useState(true);
  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const handleOnConfirm = () => {
    setShowPopup('false');
    navigate('/jobs');
  };

  return (
    <>
      {signedUp ? (
        <WelcomePage setSignedUp={setSignedUp} />
      ) : (
        <S.SetUpContainer>
          <S.HeadingContainer>
            <SettingsHeader callback={() => setShowPopup('true')}>
            {t("labels.setup_profile")}
            </SettingsHeader>
            <SetupNav
              currentPage={currentPage}
              navItems={navItems}
              callback={handleChangePage}
            />
          </S.HeadingContainer>

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
          {/* <Button callback={() => setShowPopup('true')}>Finish Later</Button> */}
        </S.SetUpContainer>
      )}
      <ConfirmPopup
        onConfirm={handleOnConfirm}
        onCancel={() => setShowPopup('false')}
        showPopup={showPopup}
      >
         {t("labels.exit_confirm")}
      </ConfirmPopup>
    </>
  );
};

export default SetUp;
