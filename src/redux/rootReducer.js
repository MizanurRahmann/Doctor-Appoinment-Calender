import { combineReducers } from 'redux';
import appoinmentReducers from "./appoinments/appoinmentReducer"

const rootReducer = combineReducers({
    appoinment: appoinmentReducers,
})

export default rootReducer;