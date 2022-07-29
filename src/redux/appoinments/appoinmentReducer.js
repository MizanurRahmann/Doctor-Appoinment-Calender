import {
  ADD_APPOINMENT,
  DELETE_APPOINMENT,
  SETUP_INITIAL_APPOINMENTS,
} from "./appoinmentType";

// INITIAL STATE
const initialState = {
  appoinments: [],
};

// REDUCERS
const appoinmentReducers = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_INITIAL_APPOINMENTS:
      return {
        appoinments: [...action.payload],
      };


    case ADD_APPOINMENT:
      const updatedList = [...state.appoinments, action.payload];
      localStorage.setItem("appoinments", JSON.stringify(updatedList));

      return {
        appoinments: [...state.appoinments, action.payload],
      };


    case DELETE_APPOINMENT:
      const updatedAppoinmentList = state.appoinments.filter((ap) => {
        return (
          ap.time !== action.payload.time
        );
      });      
      
      localStorage.setItem("appoinments", JSON.stringify(updatedAppoinmentList));
      return {
        appoinments: [...updatedAppoinmentList],
      };

      
    default:
      return state;
  }
};

export default appoinmentReducers;
