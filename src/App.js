import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-slate-700">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment and Decrement{" "}
      </div>
      <div className="flex flex-row bg-white gap-12 rounded-sm text-[25px] py-2">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center px-5"
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center px-5"
        >
          +
        </button>
      </div>
      <button
        onClick={reset}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm font-medium"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
