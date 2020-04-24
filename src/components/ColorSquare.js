import React, { Component } from "react";
// import { connect } from "react-redux";
// import { changeColor } from "../store/module/counter";

import "./ColorSquare.css";

const colors = ["#bfcd7e", "#7E57C2", "#EA80FC", "#00BCD4"];

class Color extends Component {
  render() {
    const { color, selectedcolor, number, onClick } = this.props;
    const selected = selectedcolor === color;
    const style = {
      backgroundColor: color,
      width: 200 + 10 * number,
      height: 200 + 10 * number,
    };

    return (
      <div
        className={`Color ${selected ? "active" : ""}`}
        style={style}
        onClick={() => onClick(style.backgroundColor)}
      />
    );
  }
}

class ColorSquare extends Component {
  render() {
    const { number, selectedcolor, changeColor } = this.props;
    return (
      <div
        className="ColorSquare"
        style={{
          width: 2 * (200 + 10 * number),
          height: 2 * (200 + 10 * number),
        }}
      >
        {colors.map((color) => {
          return (
            <Color
              key={color}
              color={color}
              number={number}
              selectedcolor={selectedcolor}
              onClick={changeColor}
            />
          );
        })}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   color: state.countReducer.color,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeColor: (color) => dispatch(changeColor(color)),
// });

// export default connect(null, mapDispatchToProps)(ColorSquare);

export default ColorSquare;
