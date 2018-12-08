import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    phoneNumber: '',
    phoneInformation: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    /**
     * Fetch data here
     * To access the API key => process.env.REACT_APP_NUMVERIFY_KEY
     * To access what's on the phone input => You should check the component's local state
     * The URL: http://apilayer.net/api/validate?access_key=API_KEY&number=the-number&format=1
     *
     * How to:
     *
     * fetch(theUrl).then(response => response.json()).then(formattedData => // Update the state with it)
     */
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
        <ul className="Result">
          <li>
            <strong>Valid: </strong>
            <span role="img" aria-label="Phone valid">
              ✅
            </span>
          </li>
          <li>
            <strong>International format: </strong>
          </li>
          <li>
            <strong>Country: </strong>
          </li>
          <li>
            <strong>Location: </strong>
          </li>
        </ul>
      </main>
    );
  }
}

export default App;
