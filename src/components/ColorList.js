import React, { Component } from "react";
import { connect } from "react-redux";
import { changeColor, addColorList } from "../store/module/counter";
import { bindActionCreators } from "redux";

import "./ColorList.css";

class ColorList extends Component {
  state = {
    input: "",
  };
  myRef = React.createRef();
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeColor(this.state.input);
    this.props.addColorList(this.state.input);
    this.myRef.current.focus();
    this.myRef.current.value = "";
  };
  render() {
    return (
      <div>
        <form className="ColorList" onSubmit={this.handleSubmit}>
          <input
            placeholder="원하는 색을 입력하세요"
            onChange={this.handleChange}
            ref={this.myRef}
          />
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   changeColor: (color) => dispatch(changeColor(color)),
//   addColorList: (color) => dispatch(addColorList(color)),
// });

const mapDispatchToProps = (dispatch) => ({
  changeColor: bindActionCreators(changeColor, dispatch),
  addColorList: bindActionCreators(addColorList, dispatch),
});

export default connect(null, mapDispatchToProps)(ColorList);
