import React, { Component } from 'react';
import 'components/App/App.scss';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1 className="App__title">Phone number checker</h1>
        <h2 className="App__sub-title">
          All the information you need about any phone number, just one click
          away
        </h2>
        <form
          className="Form"
          onSubmit={e => {
            e.preventDefault();
            console.log('Submitting form');
          }}
        >
          <input
            className="Input"
            type="text"
            placeholder="Type your number"
            required
          />
          <button className="Button">Find phone information</button>
        </form>
      </main>
    );
  }
}

export default App;
