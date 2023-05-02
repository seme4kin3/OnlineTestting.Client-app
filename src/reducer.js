function reducer(state, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'ADD_QUEST':
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case 'ADD_ANSWER':
      return {
        ...state,
        questions: state.questions.map((q, index) =>
          index === action.payload.id
            ? { ...q, answers: [...q.answers, action.payload.answers] }
            : q,
        ),
      };
    case 'ONCHANGE_QUEST':
      return {
        ...state,
        questions: state.questions.map((q, index) =>
          index === action.payload.id ? { ...q, text: action.payload.text } : q,
        ),
      };

    case 'UPDATE_ANSWER_TEXT':
      return {
        ...state,
        questions: state.questions.map((q, index) => {
          if (index === action.payload.questId)
            return {
              ...q,
              answers: q.answers.map((a, index) =>
                index === action.payload.id ? { ...a, text: action.payload.text } : a,
              ),
            };
          return q;
        }),
      };
    case 'TOGGLE_ANSWER':
      return {
        ...state,
        questions: state.questions.map((q, index) => {
          if (index === action.payload.questId)
            return {
              ...q,
              answers: q.answers.map((a, index) =>
                index === action.payload.id ? { ...a, isCorrect: !action.payload.isCorrect } : a,
              ),
            };
          return q;
        }),
      };
    case 'DELETE_ANSWER':
      return {
        ...state,
        questions: state.questions.map((q, index) => {
          if (index === action.payload.questId)
            return {
              ...q,
              answers: q.answers.filter((a, index) => index !== action.payload.id),
            };
          return q;
        }),
      };
    case 'DELETE_QUESTION':
      return {
        ...state,
        questions: state.questions.filter((q, index) => index !== action.payload.id),
      };

    case 'RESET_STATE':
      return {
        ...state,
        title: '',
        description: '',
        questions: [],
      };

    default:
      return state;
  }
}

export default reducer;
