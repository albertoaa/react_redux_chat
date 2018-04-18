//Every reducer you pass the current state and an action and return the new state
//By default state is and empty array
import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: 
    case types.MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]); 
    default:
      return state; 
  }
};

export default messages;