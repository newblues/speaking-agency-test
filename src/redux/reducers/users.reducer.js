import { AT } from '../actions/action-types';

const initialState = {
  pending: false,
  error: null,
  users: [],
  userSelected: '',
  search: ''
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
    case AT.GET_USER_DETAILS:
      return {
        ...state,
        userSelected: action.payload
      };
    case AT.SEARCH_USER:
      return {
        ...state,
        search: action.payload
      };
    case AT.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.first_name !== action.payload)
      };

    default:
      return state;
  }
};

export default usersReducer;
