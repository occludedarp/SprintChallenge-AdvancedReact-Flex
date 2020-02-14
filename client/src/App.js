import React from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/form'
import Player from './components/playerCard'

class App extends React.Component {
  state = {
    players: [],
    filteredPlayers: [],
    searchInput: ' '
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => 
        this.setState({ 
          players: res.data, 
          filteredPlayers: res.data, })  
      )
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  compareSearch = (e) => {
    e.preventDefault();
    if(!this.state.searchInput){
      this.setState({
        filteredPlayers: this.state.players
      })
    } else {
      this.setState({
        filteredPlayers: this.state.players.filter(players => {
          return players["name"].toLowerCase().search(this.state.searchInput.toLowerCase()) > -1
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          nameSearch={this.searchInput}
          searchSubmit={this.compareSearch}
        />
        {this.state.filteredPlayers.map((player, index) => (
          <Player
            name={player.name}
            country={player.country}
            searchInt={player.searches}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default App;
