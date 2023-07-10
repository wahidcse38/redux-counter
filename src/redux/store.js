import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
//middleware
import myLogger from "./middleware/myLogger";
import logger from "redux-logger";

//Devtools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
