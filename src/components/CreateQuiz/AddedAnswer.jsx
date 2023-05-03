import React from 'react';
import { useContext } from 'react';
import InputData from '../InputData';
import { Context } from '../../context/context';
import CheckBox from '../CheckBox';

import DeleteIcon from '@mui/icons-material/Delete';

const styleButton = {
  backgroundColor: 'white',
  border: 0,
  cursor: 'pointer',
};
const AddedAnswers = ({ question, questId }) => {
  const { dispatch } = useContext(Context);

  const handleTextAnswerChange = (e, answerId, questId) => {
    dispatch({
      type: 'UPDATE_ANSWER_TEXT',
      payload: { questId, id: answerId, text: e.target.value },
    });
  };

  const handleToggleChange = (e, answerId, questId) => {
    dispatch({
      type: 'TOGGLE_ANSWER',
      payload: { questId, id: answerId, isCorrect: e },
    });
  };

  const deleteAnswer = (answerId) => {
    dispatch({
      type: 'DELETE_ANSWER',
      payload: { questId, id: answerId },
    });
  };
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {question.answers.map((a, index) => (
          <li
            key={index}
            style={{ marginBottom: '1.5%', display: 'flex', justifyContent: 'space-between' }}>
            <InputData
              data={a.text}
              changeProp={handleTextAnswerChange}
              nameInput="Ответ"
              id={index}
              questId={questId}
            />
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <CheckBox Change={handleToggleChange} id={index} questId={questId} />
              <button style={styleButton} onClick={() => deleteAnswer(index)}>
                <DeleteIcon fontSize="medium" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedAnswers;
