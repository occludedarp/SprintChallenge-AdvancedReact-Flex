import React from 'react';
import './App.css';
import axios from 'axios';
import Player from './components/playerCard';
import NavBar from './components/navBar';
import Form from './components/form'

class App extends React.Component {
  state = {
    allPlayers: [],
    filteredPlayers: [],
    searchInput: ' '
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => 
        this.setState({ 
          allPlayers: res.data, 
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
        filteredPlayers: this.state.allPlayers
      })
    } else {
      this.setState({
        filteredPlayers: this.state.allPlayers.filter(players => {
          return players["name"].toLowerCase().search(this.state.searchInput.toLowerCase()) > -1
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="formContainer">
          <Form 
            handleChange={this.handleChange}
            nameSearch={this.searchInput}
            searchSubmit={this.compareSearch}
          />
        </div>

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
