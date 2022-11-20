import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import  getIsFetchingCurrent  from 'redux/auth/authSelectors';
import { useEffect, lazy, Suspense } from 'react';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
const HomePage = lazy(() => import('pages/HomePage/Home.page'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactPage'));




// import ContactForm from './ContactForm/ContactForm';


// import ContactList from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';


export default function App() {
  const dispatch = useDispatch();
  const IsFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


  return (
    //   <>
    //       <ContactForm />
    //     <Filter />
    //       <ContactList />
    //     </>
    // )
    <div>
      < AppBar />
      <Suspense fallback={<p>Load...</p>}>
        {!IsFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" exact element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            } />
          
            <Route path="/login" exact element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="/contacts" element={
              <PrivateRoute>
                <ContactsPage  />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
};
  


