/* eslint-disable func-names */
import { AT } from './action-types';

const END_POINT = 'https://api.speaking-beta.com/api/v2/test';

export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: AT.FETCH_USERS_PENDING });
    fetch(`${END_POINT}/users`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        return dispatch({
          type: AT.FETCH_USERS_SUCCESS,
          payload: json.data
        });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_USERS_ERROR, payload: error });
      });
  };
};

export const getUserDetails = user => {
  return dispatch => {
    dispatch({
      type: AT.GET_USER_DETAILS,
      payload: user
    });
  };
};

export const searchUser = searchInput => {
  return dispatch => {
    dispatch({
      type: AT.SEARCH_USER,
      payload: searchInput
    });
  };
};

export const deleteUser = user => {
  console.log('TLC: user', user);
  return dispatch => {
    dispatch({
      type: AT.DELETE_USER,
      payload: user.first_name
    });
  };
};
