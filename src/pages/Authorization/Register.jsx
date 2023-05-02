import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSignup } from '../../hooks/useSignup';

const style = {
  color: '#a26ef0',
  '& label.Mui-focused': {
    color: '#a26ef0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f78c28',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#a26ef0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a26ef0',
    },
  },
};

const styleButton = {
  backgroundColor: '#f78c28',
  '&:hover': {
    backgroundColor: '#f27e11',
    boxShadow: 'none',
  },
  marginTop: '3',
  marginBottom: '2',
};

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const { signUp } = useSignup();

  const theme = createTheme();

  const signup = (e) => {
    e.preventDefault();
    console.log(userName, email, password);
    signUp(userName, email, password);
    nav('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: '#f78c28' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box component="form" onSubmit={signup} noValidate sx={{ mt: 1 }}>
            <TextField
              value={userName}
              margin="normal"
              required
              fullWidth
              label="Имя Пользователя"
              name="userName"
              sx={style}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              value={email}
              margin="normal"
              required
              fullWidth
              label="Email Адрес"
              name="email"
              sx={style}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              value={password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              autoComplete="current-password"
              sx={style}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styleButton}
              //LinkComponent={Link}
              //to="/login"
            >
              Далее
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
