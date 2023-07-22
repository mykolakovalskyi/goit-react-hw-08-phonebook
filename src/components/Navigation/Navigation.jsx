import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import clsx from 'clsx';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/contacts"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
