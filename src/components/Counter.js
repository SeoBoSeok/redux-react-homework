import React, { Component } from "react";
// import { connect } from "react-redux";
import "./Counter.css";
// import { increseNumber, decreseNumber } from "../store/module/counter";

class Counter extends Component {
  render() {
    const {
      number,
      color,
      counterActions: { increseNumber, decreseNumber },
    } = this.props;
    return (
      <div className="Counter">
        <h1 style={{ color }}>{number}</h1>
        <div className="btn-wrapper">
          <button onClick={increseNumber}>+</button>
          <button onClick={decreseNumber}>-</button>
        </div>
      </div>
    );
  }
}

// const propsToState = (state) => ({
//   number: state.countReducer.number,
// });
// const propsToDispatch = (dispatch) => ({
//   increse: () => dispatch(increseNumber()),
//   decrese: () => dispatch(decreseNumber()),
// });

export default Counter;
