import { ADD_USER, REMOVE_USER } from "../actions/user";

const initialState = {
  users: []
};

export const userDataReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_USER:
      newState.users.push({
        name: action.payload.newUserName
      });
      break;
  }
  return newState;
};
