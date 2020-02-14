import React from 'react';
import './App.css';
import axios from axios;
import Player from './components/playerCard'
class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <Player/>
      </div>
    )
  }
}

export default App;
