import React, { Component } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
import { players } from './assets/players'

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: players,
            search: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        const filteredPlayers = this.state.players.filter(player => {
            return player.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || player.lastName.toLowerCase().includes(this.state.search.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>Raptor Tracker</h1>
                <Search searchChange={ this.onSearchChange }></Search>
                <CardList players={ filteredPlayers }></CardList>
            </div>
        );
    }
}

export default App;