import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import * as NewestReducers from './Newest/NewestReducers';
// import * as WorkingReducers from './Working/WorkingReducers';
// simport * as ApprovedReducers from './Approved/ApprovedReducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  // ... rest of your reducers
});

export default rootReducer;
