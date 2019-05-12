import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as SignInReducers from './components/SignIn/SignInReducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  ...SignInReducers
  // ... rest of your reducers
});

export default rootReducer;
