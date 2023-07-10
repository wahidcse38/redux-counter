import { combineReducers } from "redux";

import counterReducer from "./counter/counterReducer";
import staticCounterReducer from "./staticCounter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  staticCounter: staticCounterReducer,
});
export default rootReducer;
