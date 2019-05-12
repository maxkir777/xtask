import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as SignInReducers from './components/SignIn/SignInReducers';
import * as BoardsReducers from './components/Boards/BoardsReducers';
import * as DetailBoardReducers from './components/DetailBoard/DetailBoardReducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  ...SignInReducers,
  ...BoardsReducers,
  ...DetailBoardReducers
  // ... rest of your reducers
});

export default rootReducer;
