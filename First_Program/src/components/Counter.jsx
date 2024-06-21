import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter, incrementOdd, incrementAsync } from "../features/countSlice";

export default function Counter() {
  const count = useSelector((state) => state.count.countValue);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increaseCounter());
  };
  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };
  const handleOddIncrement = () => {
    dispatch(incrementOdd());
  };
  const handleAsync = () => {
    dispatch(incrementAsync());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4 ">Count value is: {count}</h1>
        <div className="space-x-4">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-600 text-white shadow-md shadow-red-700 rounded-md"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-600 text-white shadow-md shadow-green-700 rounded-md"
          >
            +
          </button>
          <button
            onClick={handleOddIncrement}
            className="px-4 py-2 bg-cyan-700 text-white shadow-md shadow-cyan-800 rounded-md"
          >
            Increment if ODD
          </button>
          <button
            onClick={handleAsync}
            className="px-4 py-2 bg-fuchsia-900 text-white shadow-md shadow-fuchsia-950 rounded-md"
          >
            Increment Async
          </button>
        </div>
      </div>
    </div>
  );
};


