import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { selectFilteredContacts } from 'redux/filter/selectors';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const func = async () => {
      await dispatch(fetchContacts());
    };
    func();
  }, [dispatch]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Your Phonebook</title>
        </Helmet>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {loading && !error ? (
          <b className={css.message}>Request in progress...</b>
        ) : contacts.length === 0 && !error ? (
          <p className={css.message}>
            The Phonebook is empty. Add your first contact.
          </p>
        ) : (
          <ContactList />
        )}
      </>
    </HelmetProvider>
  );
}
