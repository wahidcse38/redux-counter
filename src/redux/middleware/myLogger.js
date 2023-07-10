import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Actions: ${JSON.stringify(action)}`);
  console.log(`InitialState: ${JSON.stringify(store.getState())}`);

  //upcoming state
  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`UpcomingState: ${JSON.stringify(upcomingState)}`);

  return next(action);
};
export default myLogger;
