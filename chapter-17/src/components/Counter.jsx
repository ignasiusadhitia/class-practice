import React, { Component } from "react";

const Components = ({ name }) => <h1>{name}</h1>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <Components />
        <p>{this.state.count}</p>
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
      </div>
    );
  }
}

export default Counter;
