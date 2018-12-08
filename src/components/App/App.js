import React from 'react';
import isEmpty from 'lodash.isempty';
import './App.scss';

class App extends React.Component {
  state = {
    phoneNumber: '',
    phoneInformation: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(
      `http://apilayer.net/api/validate?access_key=${
        process.env.REACT_APP_NUMVERIFY_KEY
      }&number=${this.state.phoneNumber}&format=1`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ phoneInformation: response });
      });
  };

  handleInputChange = e => {
    this.setState({ phoneNumber: e.target.value });
  };

  render() {
    return (
      <main className="App">
        <h1 className="App__title">Phone number checker</h1>
        <h2 className="App__sub-title">
          All the information you need about any phone number, just one click
          away
        </h2>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            className="Input"
            type="text"
            placeholder="Type your number"
            required
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
          />
          <button className="Button">Find phone information</button>
        </form>
        {/* Verify if this.state.phoneInformation is not empty, if true, show the Result */}
        {true && (
          <ul className="Result">
            <li>
              <strong>Valid: </strong>
              <span role="img" aria-label="Phone valid">
                {/* Bonus points: Show  ✅ if it is valid, or show ❌ if it is not */}
              </span>
            </li>
            <li>
              <strong>International format: </strong>
              {/* Show international_format */}
            </li>
            <li>
              <strong>Country: </strong>
              {/* Show country */}
            </li>
            <li>
              <strong>Location: </strong>
              {/* Show location */}
            </li>
          </ul>
        )}
      </main>
    );
  }
}

export default App;
