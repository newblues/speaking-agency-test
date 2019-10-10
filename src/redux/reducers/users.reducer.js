import { AT } from '../actions/action-types';

const initialState = {
  pending: false,
  error: null,
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true
      };
    case AT.FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    case AT.FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
