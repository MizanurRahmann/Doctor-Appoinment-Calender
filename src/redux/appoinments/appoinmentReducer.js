import { ADD_APPOINMENT, DELETE_APPOINMENT } from "./appoinmentType";

// INITIAL STATE
const initialState = {
  appoinments: [],
};

// REDUCERS
const appoinmentReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINMENT:
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
