import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSignIn } from '../../hooks/useSignin';

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
  marginTop: '1%',
  marginBottom: '2%',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSignIn();

  const theme = createTheme();

  const login = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await signIn(email, password);
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

          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
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

            <Button type="submit" fullWidth variant="contained" sx={styleButton}>
              Войти
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" sx={{ color: '#a26ef0' }}>
                  {'Нет аккаунта? Зарегистрируйтесь'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
