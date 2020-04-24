import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  increseNumber,
  increment,
  decrement,
  decreseNumber,
} from "../store/module/counter";

import * as CounterActions from "../store/module/counter";
import { bindActionCreators } from "redux";

class CounterContainer extends Component {
  render() {
    return <Counter {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  number: state.countReducer.number,
  color: state.countReducer.color,
});

// const mapDispatchToProps = (dispatch) => ({
//   increse: () => dispatch(increment(10)),
//   decrese: () => dispatch(decreseNumber()),
// });

// redux가 제공해주는 bindActionCretors 메소드 때문에 위 아래 코드가 똑같다
// connect 함수가 내부적으로 아래와 같이 bindActionCreators를 활용해서 똑같이 props에 bind해준다
// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch) => ({
  counterActions: bindActionCreators(CounterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
