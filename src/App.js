import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.defaultColor,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
    }));
  };

  render() {
    return (
      <div
        className="square"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Square defaultColor="red" />
        <Square defaultColor="blue" />
      </div>
    );
  }
}

export default App;
