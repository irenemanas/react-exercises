import React from "react";
import "../style/_conditionalRender.scss";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display == true) {
      return (
        <div className='conditional'>
          <button onClick={this.toggleDisplay} className='toggle-btn'>
            Toggle Display
          </button>
          <h1 className='title-displayed'>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div className='conditional'>
          <button onClick={this.toggleDisplay} className='toggle-btn'>
            Toggle Display
          </button>
          <h1 className='title-displayed'></h1>
        </div>
      );
    }
  }
}

export default ConditionalRender;
