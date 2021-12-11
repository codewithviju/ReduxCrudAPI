import { ActionTypes } from "../Constants/action-types";

// for List Users
export const listUsers = (users) => {
  return {
    type: ActionTypes.LIST_USERS,
    payload: users,
  };
};

//for Add USers

export const addUsers = (users) => {
  return {
    type: ActionTypes.ADD_USERS,
    payload: users,
  };
};

// for Edit Users
export const updateUsers = (users) => {
  return {
    type: ActionTypes.UPDATE_USERS,
    payload: users,
  };
};

// for Delete USers
export const deleteUsers = (users) => {
  return {
    type: ActionTypes.DELETE_USERS,
    payload: users,
  };
};
