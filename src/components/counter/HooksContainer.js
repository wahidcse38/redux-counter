import { decrement, increment } from "@/redux/counter/actions";
import { connect, useDispatch, useSelector } from "react-redux";

function HooksCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHendler = (value) => {
    dispatch(increment(value));
  };
  const decrementHendler = (value) => {
    dispatch(decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHendler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHendler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
