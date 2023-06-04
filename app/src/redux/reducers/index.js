import { combineReducers } from "redux";

import authReducer from './authReduicer'
import errorsReducer from './errorsReducer'
export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
})