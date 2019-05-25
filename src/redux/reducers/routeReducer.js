import { CHANGE_CURRENT_VIEW } from "../actions/route";

const initialState = {
  currentView: "ViewScreen"
};

export const routeReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case CHANGE_CURRENT_VIEW:
      if (isValidView(action.payload.viewToLoad)) {
        newState.currentView = action.payload.viewToLoad;
      }
      break;
  }
  return newState;
};

const isValidView = newView => {
  const validViews = ["ViewScreen", "AddUserScreen", "RemoveUserScreen"];
  return validViews.find(view => view === newView);
};
