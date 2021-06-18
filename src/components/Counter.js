import React from "react";
import "../style/_counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState((state) => (state.count = state.count + 1));
  }
  decrement() {
    this.setState((state) => (state.count = state.count - 1));
  }
  reset() {
    this.setState((state) => (state.count = 0));
  }
  // Change code above this line
  render() {
    return (
      <div className='counter'>
        <h2>COUNTER</h2>
        <div className='btn'>
          <button className='inc' onClick={this.increment}>
            Increment!
          </button>
          <button className='dec' onClick={this.decrement}>
            Decrement!
          </button>
          <button className='reset' onClick={this.reset}>
            Reset
          </button>
        </div>
        <h3 className='result'>Current Count: {this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
