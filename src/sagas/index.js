import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

// function* is a generator function that returns something different every time is called
const handleNewMessage = function* handleNewMessage(params) {
  // Take every action of type ADD_MESSAGE will send a message to the websocket passing the action and details/data
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  });
};

export default handleNewMessage;