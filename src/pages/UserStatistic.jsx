import { useEffect, useState } from 'react';
import { ENDPOINTS, createAPIEndpoint } from '../api';

const UserStatistic = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.result)
      .fetchStatUser()
      .then((res) => setResult(res.data));
  }, []);
  return (
    <div>
      Result
      {result.map((r, index) => (
        <div key={index}>
          <li>
            {r.title}
            {r.description}
            {r.totalScore}
          </li>
        </div>
      ))}
    </div>
  );
};

export default UserStatistic;
