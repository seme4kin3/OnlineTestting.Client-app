import { Grid } from '@mui/material';
import CardQuiz from '../components/CardQuiz';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../api';

const AllQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.quiz)
      .fetch()
      .then((res) =>
        res.data.sort((a, b) => {
          if (a['dateCreated'] > b['dateCreated']) {
            return 1;
          }
          if (a['dateCreated'] < b['dateCreated']) {
            return -1;
          }
          if (!b['dateCreated']) {
            return -1;
          }

          return 0;
        }),
      )
      .then((res) => setQuiz(res.reverse()));
  }, []);

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {quiz.map((q) => (
        <List key={q.id}>
          <CardQuiz quiz={q}></CardQuiz>
        </List>
      ))}
      {console.log(quiz)}
    </Grid>
  );
};

export default AllQuiz;
