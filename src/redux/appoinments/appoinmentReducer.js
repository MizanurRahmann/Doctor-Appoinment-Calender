import { ADD_APPOINMENT, DELETE_APPOINMENT, SETUP_INITIAL_APPOINMENTS } from "./appoinmentType";

// INITIAL STATE
const initialState = {
  appoinments: [],
};

// REDUCERS
const appoinmentReducers = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_INITIAL_APPOINMENTS:
      return {
        appoinments: [...action.payload]
      }

    case ADD_APPOINMENT:
      // 1. update appoinment list
      const updatedList = [...state.appoinments, action.payload];
      // 2. persist appoinment data to local storage
      localStorage.setItem("appoinments", JSON.stringify(updatedList));
      // return updated state to redux store
      return {
        appoinments: [...state.appoinments, action.payload]
      };
    
    case DELETE_APPOINMENT:
      return {
        appoinments: [...state.appoinments, action.payload]
      };
    default:
      return state;
  }
};

export default appoinmentReducers;
