import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { searchScreenReducer } from "./searchScreenReducer";
import { scheduleScreenReducer } from "./scheduleScreenReducer";

export default rootReducer = combineReducers({
  appReducer,
  searchScreenReducer,
  scheduleScreenReducer,
});
