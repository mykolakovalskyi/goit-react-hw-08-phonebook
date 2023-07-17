import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newContact = { name, number };
    let nameCheckingArray = contacts.map(contact => contact.name);
    if (!nameCheckingArray.includes(name)) {
      dispatch(addContact(newContact));
    } else {
      alert(`${name} is already in contacts`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Jacob Mercer"
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        id="number"
        value={number}
        onChange={handleChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="000-00-00"
      />
      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
    </form>
  );
}
