import { combineReducers } from 'redux';

import usersReducer from './reducers/users.reducer';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
