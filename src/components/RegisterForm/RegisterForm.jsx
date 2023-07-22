import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

import {
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Register</h2>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <Stack direction={'column'} spacing={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Username"
            name="username"
            variant="filled"
            color="primary"
          />
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Email"
            name="email"
            variant="filled"
            color="primary"
          />
          <FormControl required fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              name="password"
              variant="filled"
              color="primary"
              type="password"
              label="Password"
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
