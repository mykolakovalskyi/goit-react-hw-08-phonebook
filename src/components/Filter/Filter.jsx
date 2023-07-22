import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';
import { TextField, InputAdornment } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch();

  const setContactFilter = e => {
    let value = e.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <TextField
        onChange={setContactFilter}
        fullWidth
        id="input-with-icon-textfield"
        placeholder="Search by name"
        type="text"
        variant="standard"
        name="filter"
        color="primary"
      />
    </div>
  );
}
