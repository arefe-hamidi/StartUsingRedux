import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index.js";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    console.log("test");
    dispatch(counterAction.toggle());
  };
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increasetHandler = () => {
    dispatch(counterAction.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={increasetHandler}>increase by 5</button>
            <button onClick={decrementHandler}>decrement</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
