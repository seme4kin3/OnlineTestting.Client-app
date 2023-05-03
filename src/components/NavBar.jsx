import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import ProfileUser from './ProfileUser';
import { useAuthContext } from '../hooks/useAuthContext';

const { AppBar, Toolbar, Avatar, Typography, Box } = require('@mui/material');

function NavBar() {
  const { user } = useAuthContext();
  return (
    <AppBar sx={{ backgroundColor: '#a26ef0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar src="image\logo.jpg" alt="Logo" sx={{ width: 70, height: 70, p: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 500 }} color="inherit">
            <b>ТЕСТ</b>ИК
          </Typography>
        </Box>
        <Stack spacing={2} direction="row" width={400} justifyContent="space-between">
          <Typography variant="h6">
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              Главная
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/createquiz" style={{ textDecoration: 'none', color: 'inherit' }}>
              Создать тест
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/allquiz" style={{ textDecoration: 'none', color: 'inherit' }}>
              Пройти тест
            </Link>
          </Typography>
        </Stack>
        {user ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography>{user.userEmail}</Typography>
            <ProfileUser />
          </Box>
        ) : (
          <Box />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
