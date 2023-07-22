import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.email}> {user.email}</p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
