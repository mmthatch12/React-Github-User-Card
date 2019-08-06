import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubData: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github users</h1>
      </div>
    );
  }
  
}

export default App;
