import React from "react";
import styles from "../css/style.module.css";
import "../css/styles.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  increment,
  decrement,
  incrementBy,
} from "../redux/slices/counter.slices";

const Counter = () => {
  // get data from redux store
  const counterState = useSelector((store) => store["counter"]);
  const { count } = counterState;

  const dispatch = useDispatch();

  return (
    <>
      <div className=" ml-10 w-[200px] mt-5 border border-gray-600 main-div">
        <p className=" text-3xl">{count}</p>
        <div className={styles.buttonDiv}>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementBy(5))}>+5</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
