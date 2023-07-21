import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { Layout } from '../Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const PhonebookPage = lazy(() => import('pages/Phonebook/Phonebook'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    const func = async () => {
      await dispatch(refreshUser());
    };
    func();
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}
