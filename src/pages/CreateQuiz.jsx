import { useReducer } from 'react';

import InputData from '../components/InputData';
import { Button } from '@mui/material';

import reducer from '../reducer';
import { Context } from '../context';
import AddedQuestion from '../components/CreateQuiz/AddedQuestion';
import { ENDPOINTS, createAPIEndpoint } from '../api';

const quiz = {
  title: '',
  description: '',
  questions: [
    {
      text: '',
      answers: [],
    },
  ],
};

const styleButton = {
  backgroundColor: '#f78c28',
  height: '40px',
  '&:hover': {
    backgroundColor: '#f27e11',
  },
};

const CreateQuiz = () => {
  const [state, dispatch] = useReducer(reducer, quiz);

  const handleTextChange = (e) => {
    dispatch({
      type: 'ON_CHANGE',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const addQuestion = (obj) => {
    dispatch({
      type: 'ADD_QUEST',
      field: state.questions,
      payload: obj,
    });
  };

  const handleTextQuestChange = (e, id) => {
    dispatch({
      type: 'ONCHANGE_QUEST',
      payload: { id, text: e.target.value },
    });
  };

  const postQuiz = () => {
    createAPIEndpoint(ENDPOINTS.quiz)
      .post(state)
      .then(() => console.log('Добавление прошло успешно'))
      .catch((error) => console.log(error));

    dispatch({
      type: 'RESET_STATE',
      payload: { quiz: state },
    });
  };
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '450px',
            }}>
            <InputData
              name="title"
              data={state.title}
              changeProp={handleTextChange}
              nameInput="Название теста"
            />

            <InputData
              name="description"
              changeProp={handleTextChange}
              nameInput="Описание теста"
              data={state.description}
            />
          </div>
          <Button variant="contained" sx={styleButton} onClick={() => postQuiz()}>
            Сохранить
          </Button>
        </div>

        <AddedQuestion state={state} Change={handleTextQuestChange} addQuest={addQuestion} />
        <div></div>
      </div>
    </Context.Provider>
  );
};

export default CreateQuiz;
