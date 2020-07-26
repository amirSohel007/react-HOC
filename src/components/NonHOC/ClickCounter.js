import React from "react";

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((preState) => {
      return {
        counter: preState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked me {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
