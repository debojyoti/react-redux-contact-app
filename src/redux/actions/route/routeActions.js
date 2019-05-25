import { CHANGE_CURRENT_VIEW } from "./actionTypes";

export const changeCurrentView = viewToLoad => {
  return {
    type: CHANGE_CURRENT_VIEW,
    payload: {
      viewToLoad
    }
  };
};
