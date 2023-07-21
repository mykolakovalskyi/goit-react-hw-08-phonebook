import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.list.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      const index = state.list.findIndex(
        contact => contact.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.list = [];
      state.error = null;
      state.loading = false;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
