import React, { Component } from "react";
import "./App.css";
// import Counter from './components/Counter';
import ColorList from "./components/ColorList";
// import ColorSquare from "./components/ColorSquare";
import CounterContainer from "./containers/CounterContainer";
import ColorSquareContainer from "./containers/ColorSquareContainer";
import ColorAddedListContainer from "./containers/ColorAddedListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <CounterContainer />
        {/* <ColorSquare /> */}
        <ColorSquareContainer />
        <ColorList />
        <ColorAddedListContainer />
      </div>
    );
  }
}

export default App;
