import { SINCREMENT, SDECREMENT } from "./actionTypes";

const initialState = {
  value: 5,
};

const staticCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case SDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default staticCounterReducer;
