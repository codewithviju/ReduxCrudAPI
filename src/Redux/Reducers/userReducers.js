import { ActionTypes } from "../Constants/action-types";

const initialState = {
  users: [],
};
export const userReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LIST_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
