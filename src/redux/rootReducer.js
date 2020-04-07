import { combineReducers } from "redux";
import authReducer from "../pages/SignIn/redux/reducer";

export default combineReducers({
  auth: authReducer,
});
