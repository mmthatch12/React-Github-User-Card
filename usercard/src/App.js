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

  componentDidMount() {
    this.getUserData()
  }

  getUserData = () => {
    Axios.get(`https://api.github.com/users/mmthatch12`)
      .then(response => {
        const theInfo = response.data
        console.log('theInfo', theInfo)
        this.setState({ githubData: theInfo})
        console.log("this.state.githubData", this.state.githubData)
      })
      .catch(err => {
        console.log(err)
      })
  
  }

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
