import React from "react";
import "../style/_controlledForm.scss";

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Change code below this line
    this.setState({
      submit: this.state.input,
    });
    event.preventDefault();
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='ctrl-form'>
          <h2>TYPE & SUBMIT</h2>
          {/* Change code below this line */}
          <div className='form-input'>
            <input value={this.state.input} onChange={this.handleChange} className='form-input-item' />
            {/* Change code above this line */}
            <button type='submit' className='form-submit-item'>
              Submit!
            </button>
          </div>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

export default ControlledForm;
