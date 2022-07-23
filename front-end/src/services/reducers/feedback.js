import { ACTION } from "../actions";

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

const feedback = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        name: action.state.name,
        email: action.state.email,
        message: action.state.message
      };
    default:
      return state;
  }
};

export default feedback;