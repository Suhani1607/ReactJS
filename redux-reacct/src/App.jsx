import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  IncrementByAmount,
} from "./features/counter/counterSlice";
function App() {
  const [amount, setAmount] = useState(0);
  // let [counter, setCounter] = useState(0);
  // const handleIncrementClick = () => {
  //   counter += 1;
  //   setCounter(counter);
  // };
  // const handleDecrementClick = () => {
  //   counter -= 1;
  //   setCounter(counter);
  // };

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleAmountInc() {
    dispatch(IncrementByAmount(amount));
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <input
          type="text"
          value={amount}
          placeholder="Enter Amount "
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleAmountInc}>Amount Inc</button>
      </div>
    </>
  );
}

export default App;
