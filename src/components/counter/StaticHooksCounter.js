import { decrement, increment } from "@/redux/staticCounter/actions";
import { connect, useDispatch, useSelector } from "react-redux";

function StaticHooksCounter() {
  const count = useSelector((state) => state.staticCounter.value);
  const dispatch = useDispatch();

  const incrementHendler = () => {
    dispatch(increment());
  };
  const decrementHendler = () => {
    dispatch(decrement());
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHendler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementHendler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default StaticHooksCounter;
