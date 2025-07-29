import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
// import { Component } from 'react'
// import { connect } from 'react-redux'

import { counterSliceActions } from '../reduxStore';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toogleShow())
  };

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const isShown = useSelector(state => state.toggleShow)

  const incrementHandler = () => {
    dispatch(counterSliceActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterSliceActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterSliceActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      {/* <div className={classes.value}>{counter}</div> */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
