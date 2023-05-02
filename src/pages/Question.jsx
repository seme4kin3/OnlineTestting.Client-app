import { Card, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createAPIEndpoint, ENDPOINTS } from '../api';

const styleObj = {
  backgroundColor: {
    backgroundColor: '#f59453',
  },
  '&:hover': {
    backgroundColor: '#600fa3',
  },
};

const emptyQuest = [
  {
    id: 1,
    text: '',
    answers: [],
  },
];

const Question = () => {
  const location = useLocation();
  const nav = useNavigate();

  const quiz = location.state;

  const [question, setQuestion] = useState(emptyQuest);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.quiz)
      .fetchById(quiz.id)
      .then((res) => setQuestion(res.data.questions));
  }, [quiz.id]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuest = currentQuestion + 1;
    nextQuest < question.length ? setCurrentQuestion(nextQuest) : setShowScore(true);
  };

  const postStat = () => {
    createAPIEndpoint(ENDPOINTS.result)
      .postStatUser(quiz.id, score)
      .then((res) => console.log(res.data));
    nav('/allquiz');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            width: '500px',
            minHeight: '200px',
            display: 'flex',
            justifyContent: 'center',
          }}>
          {showScore ? (
            <div
              className="total_score"
              style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
              <div>
                <h3>
                  Правильных ответов {score} из {question.length}
                </h3>
              </div>
              <Button state={quiz} onClick={() => postStat()} variant="contained" sx={styleObj}>
                Закончить
              </Button>
            </div>
          ) : (
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <div
                className="questions"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4>Вопрос {currentQuestion + 1}</h4>
                <div className="name_quest">
                  <h3>{question[currentQuestion].text}</h3>
                </div>
              </div>
              <div className="answer">
                {question[currentQuestion].answers.map((a, index) => (
                  <li key={index} style={{ listStyleType: 'none' }}>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => handleAnswerClick(a.isCorrect)}
                      sx={{ width: '250px', marginBottom: '1%' }}>
                      {a.text}
                    </Button>
                  </li>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Question;
