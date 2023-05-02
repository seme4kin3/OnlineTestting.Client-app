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
      {quiz.totalScore ? (
        <CardContent>
          <Typography>Название: {quiz.title}</Typography>
          <Typography>Описание: {quiz.description}</Typography>
          <Typography>Количество баллов: {quiz.totalScore}</Typography>
        </CardContent>
      ) : (
        <>
          <CardContent>
            <Typography>Название: {quiz.title}</Typography>
            <Typography>Описание: {quiz.description}</Typography>
            <Typography>Дата создания: {quiz.dateCreated}</Typography>
          </CardContent>
          <CardActions disableSpacing={true} sx={{ flexDirection: 'row-reverse' }}>
            <Button
              LinkComponent={Link}
              to="/question"
              state={quiz}
              variant="contained"
              sx={styleObj}>
              Начать
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default CardQuiz;
