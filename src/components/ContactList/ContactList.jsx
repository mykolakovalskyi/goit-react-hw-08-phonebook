import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              id={contact.id}
              onClick={deleteSelectedContact}
              className={css.deleteButton}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
