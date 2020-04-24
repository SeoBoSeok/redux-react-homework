import React, { Component } from "react";
import "./ColorAddedList.css";

export default class ColorAddedList extends Component {
  colorRef = React.createRef();
  handleClick = (colors) => {
    if (colors && colors.opacity > 0.1) {
      this.props.changeOpacity(colors);
      this.props.changeColor(colors.colorCode);
    } else {
      alert("Opacity 값은 0.1이하로 내려갈 수 없습니다.");
    }
  };
  handleRightClick = (color) => {
    // console.log("right component clicked");
    this.props.removeColorList(color);
  };
  render() {
    // console.log(this.props);
    const { colorList } = this.props;

    return (
      colorList &&
      colorList.map((colors) => (
        <div
          key={colors.key}
          ref={this.colorRef}
          className={`addedColor`}
          style={{
            backgroundColor: `${colors.colorCode}`,
            opacity: `${colors.opacity}`,
          }}
          onClick={() => {
            this.handleClick(colors);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            this.handleRightClick(colors.key);
          }}
        ></div>
      ))
    );
  }
}
