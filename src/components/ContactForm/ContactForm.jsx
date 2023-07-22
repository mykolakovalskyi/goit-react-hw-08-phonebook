import React, { useRef } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import { Box, Stack, TextField, Button } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputRef = useRef(null);
  const numberInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;
    const newContact = { name, number };
    let nameCheckingArray = contacts.map(contact => contact.name);
    if (!nameCheckingArray.includes(name)) {
      dispatch(addContact(newContact));
    } else {
      toast.error(`${name} is already in contacts`);
    }

    nameInputRef.current.value = '';
    numberInputRef.current.value = '';
  };

  return (
    <div className={css.wrapper}>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <Stack direction={'column'} spacing={3}>
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            color="primary"
            inputRef={nameInputRef}
          />
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Number"
            variant="standard"
            type="tel"
            name="number"
            color="primary"
            inputRef={numberInputRef}
          />

          <Button variant="contained" color="primary" type="submit">
            Add contact
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
