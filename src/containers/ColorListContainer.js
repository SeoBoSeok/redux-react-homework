import React, { Component } from "react";
import ColorList from "../components/ColorList";

export default class ColorListContainer extends Component {
  render() {
    return <ColorList {...this.props} />;
  }
}
