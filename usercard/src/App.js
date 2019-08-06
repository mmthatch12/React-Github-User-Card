import React from 'react';
import './App.css';
import Axios from 'axios'

import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubData: [],
      followers: []
    }
  }

  componentDidMount() {
    this.getUserData()
    this.getUserFollowers()
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

  getUserFollowers = () => {
    Axios.get(`https://api.github.com/users/mmthatch12/followers`)
      .then(response => {
        const theFollowers = response.data
        console.log("theFollowers", theFollowers)
        this.setState({ followers: theFollowers })
        console.log("this.state.followers", this.state.followers)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Github users</h1>
        <UserCard userData={this.state.githubData} />
        <FollowerCard followerData={this.state.followers} />
      </div>
    );
  }
  
}

export default App;
