import React, { Component } from "react";
import ColorSquare from "../components/ColorSquare";
import { connect } from "react-redux";
import { changeColor } from "../store/module/counter";

class ColorSquareContainer extends Component {
  render() {
    return <ColorSquare {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  number: state.countReducer.number,
  selectedcolor: state.countReducer.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContainer);
