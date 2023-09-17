import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import AccountSettings from '../../components/account-settings/account-settings.component';

import ChangeEmail from '../../components/change-email/change-email.component';
import ChangeName from '../../components/change-name/change-name.component';
import ChangePass from '../../components/change-pass/change-pass.component';
import SettingsHeader from '../../components/settings-header/settings-header.component';
import SetupNav from '../../components/setup-nav/setup-nav.component';

import * as S from './change.account.styles';

const items = ['Display name', 'Email', 'Password', 'Settings'];

const ChangeAccount = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(+page);

  const something = page => {
    setCurrentPage(page);
  };

  return (
    <S.ChangeAccountContainer>
      <div>
        <SettingsHeader callback={() => navigate('/settings')}>
          {t('labels.change_acc_info')}
        </SettingsHeader>
        <SetupNav
          callback={something}
          navItems={items}
          currentPage={currentPage}
        />
      </div>
      <main>
        {currentPage === 0 && <ChangeName />}
        {currentPage === 1 && <ChangeEmail />}
        {currentPage === 2 && <ChangePass />}
        {currentPage === 3 && <AccountSettings />}
      </main>
    </S.ChangeAccountContainer>
  );
};

export default ChangeAccount;
