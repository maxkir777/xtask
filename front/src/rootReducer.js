import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as SignInReducers from './components/SignIn/SignInReducers';
import * as BoardsReducers from './components/Boards/BoardsReducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  ...SignInReducers,
  ...BoardsReducers
  // ... rest of your reducers
});

export default rootReducer;
