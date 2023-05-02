import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//import homePage from 'client-app/public/homePage.png';
import { useAuthContext } from '../hooks/useAuthContext';

const styleButton = {
  backgroundColor: '#f78c28',
  '&:hover': {
    backgroundColor: '#f27e11',
    boxShadow: 'none',
  },
  width: '120px',
};

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginInlineStart: '3%',
      }}>
      <div className="about" style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
        <div style={{ marginTop: '10%' }}>
          <Typography variant="h3" sx={{ fontWeight: '500' }}>
            Конструктор тестов
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: '400', marginTop: '2%' }}>
            Создавай тесты и проверяй знания
          </Typography>
        </div>
        <div style={{ marginTop: '20%' }}>
          <Button
            variant="contained"
            sx={styleButton}
            LinkComponent={Link}
            to={user ? '/createquiz' : '/login'}>
            Начать
          </Button>
        </div>
      </div>
      <div className="picture">
        <img src="/image/homePage.png" alt="homePage" style={{ width: '850px', height: '500px' }} />
      </div>
    </div>
  );
};

export default Home;
