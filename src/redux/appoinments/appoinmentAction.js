import { ADD_APPOINMENT, DELETE_APPOINMENT, SETUP_INITIAL_APPOINMENTS } from "./appoinmentType";


// Setup Initial appinments to redux store
export const getAppoinmentData = (data) => (dispatch) => {
  dispatch({ type: SETUP_INITIAL_APPOINMENTS, payload: data });
}

// Add new appoinment
export const addNewAppoinment = (newAppoinment) => (dispatch) => {
  dispatch({ type: ADD_APPOINMENT, payload: newAppoinment });
};