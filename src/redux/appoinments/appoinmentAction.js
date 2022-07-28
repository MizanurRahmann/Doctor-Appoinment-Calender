import { ADD_APPOINMENT, DELETE_APPOINMENT } from "./appoinmentType";

export const addNewAppoinment = (newAppoinment) => (dispatch) => {
  dispatch({ type: ADD_APPOINMENT, payload: newAppoinment });
};
