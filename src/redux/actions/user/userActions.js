import { ADD_USER, REMOVE_USER } from "./";

export const addNewUser = userName => {
  return {
    type: ADD_USER,
    payload: {
      newUserName: userName
    }
  };
};

export const removeUser = userName => {
  return {
    type: REMOVE_USER,
    payload: {
      userName
    }
  };
};
