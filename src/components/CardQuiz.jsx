import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const styleObj = {
  backgroundColor: {
    backgroundColor: '#f59453',
  },
  '&:hover': {
    backgroundColor: '#600fa3',
  },
};

const CardQuiz = ({ quiz }) => {
  return (
    <Card
      sx={{
        width: '350px',
        height: '200px',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <CardContent>
        <Typography>Title {quiz.title}</Typography>
        <Typography>Description {quiz.description}</Typography>
      </CardContent>
      <CardActions disableSpacing={true} sx={{ flexDirection: 'row-reverse' }}>
        <Button LinkComponent={Link} to="/question" state={quiz} variant="contained" sx={styleObj}>
          Начать
        </Button>
      </CardActions>
    </Card>
  );
  // LinkComponent={Link} to="/question"
};

export default CardQuiz;
