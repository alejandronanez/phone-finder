import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import 'components/App/App.scss';

class App extends Component {
  state = {
    phoneInformation: {},
    phoneNumber: ''
  };

  handleFormSubmission = e => {
    // This will prevent the form submission - the page will not reload on submit
    e.preventDefault();

    // Get the data from the API
    fetch(
      `http://apilayer.net/api/validate?access_key=${
        process.env.REACT_APP_NUMVERIFY_KEY
      }&number=573013373163&format=1`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ phoneInformation: response });
      });
  };

  handleOnChange = e => {
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
        <form className="Form" onSubmit={this.handleFormSubmission}>
          <input
            className="Input"
            type="text"
            placeholder="Type your number"
            onChange={this.handleOnChange}
            value={this.state.phoneNumber}
            required
          />
          <button className="Button">Find phone information</button>
        </form>
        {!isEmpty(this.state.phoneInformation) && (
          <ul className="Result">
            <li>
              <strong>Valid: </strong>
              {this.state.phoneInformation.valid ? (
                <span role="img" aria-label="Phone valid">
                  ✅
                </span>
              ) : (
                <span role="img" aria-label="Phone invalid">
                  ❌
                </span>
              )}
            </li>
            <li>
              <strong>International format: </strong>
              {this.state.phoneInformation.international_format}
            </li>
            <li>
              <strong>Country: </strong>
              {this.state.phoneInformation.country_name}
            </li>
            <li>
              <strong>Location: </strong>
              {this.state.phoneInformation.location}
            </li>
          </ul>
        )}
      </main>
    );
  }
}

export default App;
