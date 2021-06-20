import React from "react";
import "../style/_callbackAsProps.scss";

class CallbackAsProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div className='callback'>
        {/* Change code below this line */}
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='get'>
        <h2>Get Input:</h2>
        <input value={this.props.input} onChange={this.props.handleChange} className='input' />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='render'>
        <h2>Input Render:</h2>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default CallbackAsProps;
