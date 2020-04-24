import React, { Component } from "react";
import ColorAddedList from "../components/ColorAddedList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  changeColor,
  changeOpacity,
  removeColorList,
} from "../store/module/counter";

class ColorAddedListContainer extends Component {
  render() {
    return (
      <div className="addedContainer">
        <ColorAddedList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colorList: state.countReducer.colorList,
});

const mapDispatchToProps = (dispatch) => ({
  changeColor: bindActionCreators(changeColor, dispatch),
  changeOpacity: bindActionCreators(changeOpacity, dispatch),
  removeColorList: bindActionCreators(removeColorList, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorAddedListContainer);
