import React from 'react';
import './App.css';
import Axios from 'axios'

import UserCard from './components/UserCard'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubData: []
    }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <h1>Github users</h1>
        <UserCard />
      </div>
    );
  }
  
}

export default App;
