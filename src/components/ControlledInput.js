import React from "react";
import "../style/_controlledInput.scss";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " ",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Change code above this line
  render() {
    return (
      <div className='ctrl-input'>
        <h2>TYPE INTO INPUT</h2>
        <div className='input-cont'>
          <input type='text' value={this.state.input} onChange={this.handleChange} className='input' />
        </div>
        <h3>Controlled Input: {this.state.input}</h3>
      </div>
    );
  }
}

export default ControlledInput;
