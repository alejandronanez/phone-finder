import React from 'react';
import './App.scss';

function handleSubmit(e) {
  e.preventDefault();

  console.log('submitting');
}

function App() {
  return (
    <main className="App">
      <h1 className="App__title">Phone number checker</h1>
      <h2 className="App__sub-title">
        All the information you need about any phone number, just one click away
      </h2>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          className="Input"
          type="text"
          placeholder="Type your number"
          required
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

export default App;
