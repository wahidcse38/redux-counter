import { decrement, increment } from "@/redux/counter/actions";
import {
  decrement as sDecrement,
  increment as sIncrement,
} from "@/redux/staticCounter/actions";
import { connect } from "react-redux";

function ConditionalCounter({ count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.static ? state.staticCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.static
      ? () => dispatch(sIncrement())
      : () => dispatch(increment(5)),
    decrement: ownProps.static
      ? () => dispatch(sDecrement())
      : () => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConditionalCounter);
