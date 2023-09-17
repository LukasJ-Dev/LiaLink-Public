import { Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { useEffect } from 'react';
import {
  addDocumentToFirebase,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.store.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveLanguageAsync,
  signSuccess,
} from './store/features/user/user.slice';
import { onAuthStateChangedListener } from './utils/firebase/firebase-auth.utils';
//to use when updating jobdata
import { jobs } from './data/mockupData';
import { getJobsAsync } from './store/features/jobs/jobs.slice';
import Spinner from './components/spinner/spinner.component';
import UpdateProfile from './routes/update-profile/update-profile.component';
import { Toaster } from 'react-hot-toast';
import { selectAccountInfo } from './store/features/user/user.selectors';
import { changeLanguage } from 'i18next';
const StartPage = lazy(() =>
  import('./routes/start-page/start-page.component')
);
const SignIn = lazy(() => import('./routes/sign-in/sign-in.component'));
const SignUp = lazy(() => import('./routes/sign-up/sign-up.component'));
const SetUp = lazy(() => import('./routes/set-up/set-up.component'));
const Jobs = lazy(() => import('./routes/jobs/jobs.component'));
const JobPage = lazy(() => import('./routes/job-page/job-page.component'));
const UserSettings = lazy(() =>
  import('./routes/user-settings/user-settings.component')
);
const ChangeAccount = lazy(() =>
  import('./routes/change-account/change-account.component')
);

function App() {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectAccountInfo);

  useEffect(() => {
    if (!accountInfo) return;
    if (accountInfo.language) {
      changeLanguage(accountInfo.language);
      return;
    }
    const lang = navigator.language;
    changeLanguage(lang);
    dispatch(saveLanguageAsync(lang));
  }, [accountInfo?.language]);

  useEffect(() => {
    // dont delete, to use when updating jobs
    // addDocumentToFirebase('jobs', 'jobsData', { jobs });
    dispatch(getJobsAsync());
    const unsubscribe = onAuthStateChangedListener(async user => {
      if (user) {
        const userData = await createUserDocumentFromAuth(user);
        dispatch(signSuccess(userData));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/set-up" element={<SetUp />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobPage />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/change-account/:page" element={<ChangeAccount />} />
          <Route path="/update-profile/:page" element={<UpdateProfile />} />
        </Routes>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
