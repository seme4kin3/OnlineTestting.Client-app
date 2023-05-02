import { useEffect, useState } from 'react';
import { ENDPOINTS, createAPIEndpoint } from '../api';
import { Grid } from '@mui/material';
import CardQuiz from '../components/CardQuiz';
import List from '@mui/material/List';

const UserStatistic = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.result)
      .fetchStatUser()
      .then((res) => setResult(res.data));
  }, []);
  return (
    <div>
      Результаты тестов
      <Grid container spacing={2} justifyContent="space-around">
        {result.map((r, index) => (
          <List key={index}>
            <CardQuiz quiz={r}></CardQuiz>
          </List>
        ))}
        {/* {console.log(quiz)} */}
      </Grid>
    </div>
  );
};

export default UserStatistic;
