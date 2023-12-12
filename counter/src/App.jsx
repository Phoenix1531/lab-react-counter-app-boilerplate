import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let Dec = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };
    let reset = () => {
      this.setState({ count: (this.state.count = 0) });
    };
    return (
      <>
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>

        <div className="buttons_div">
          <button onClick={this.Inc}>+</button>
          <button onClick={Dec}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default Counter;
