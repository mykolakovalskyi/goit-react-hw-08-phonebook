import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.wrapper}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <Button
              size="small"
              id={contact.id}
              variant="contained"
              color="primary"
              type="button"
              onClick={deleteSelectedContact}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
