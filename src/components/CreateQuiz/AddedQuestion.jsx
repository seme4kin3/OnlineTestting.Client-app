import { Button, Card, Typography } from '@mui/material';
import InputData from '../InputData';
import AddedAnswers from './AddedAnswer';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useContext } from 'react';
import { Context } from '../../context';
import ClearIcon from '@mui/icons-material/Clear';

const quest = {
  text: '',
  answers: [],
};

const emptyAnswer = {
  text: '',
  isCorrect: false,
};

const styleCard = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '150px',
  minwidth: '600px',
  margin: '3% auto 1%',
};

const styleButton = {
  backgroundColor: 'white',
  border: 0,
  cursor: 'pointer',
};
const styleBtn = {
  backgroundColor: '#f78c28',
  height: '40px',
  '&:hover': {
    backgroundColor: '#f27e11',
  },
  marginTop: '2%',
};

const AddedQuestion = ({ state, Change, addQuest }) => {
  const { dispatch } = useContext(Context);

  const addAnswer = (obj, id) => {
    dispatch({
      type: 'ADD_ANSWER',
      payload: { id, answers: obj },
    });
  };

  const deleteQuestion = (id) => {
    dispatch({
      type: 'DELETE_QUESTION',
      payload: { id },
    });
  };
  return (
    <div>
      {state.questions.map((q, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Card sx={styleCard}>
            <Typography sx={{ marginLeft: '2%', marginRight: '4%', minWidth: '90px' }}>
              Вопрос №{index + 1}
            </Typography>
            <InputData data={q.text} changeProp={Change} nameInput="Название вопроса" id={index} />
            <button onClick={() => addAnswer(emptyAnswer, index)} style={styleButton}>
              <ControlPointIcon fontSize="large" />
            </button>
            <AddedAnswers idQuest={index} question={q} questId={index} />
            <div style={{ marginLeft: 'auto', marginBottom: 'auto' }}>
              <button style={styleButton} onClick={() => deleteQuestion(index)}>
                <ClearIcon />
              </button>
            </div>
          </Card>
        </li>
      ))}
      <Button variant="contained" onClick={() => addQuest(quest)} sx={styleBtn}>
        Добавить вопрос
      </Button>
    </div>
  );
};

export default AddedQuestion;
