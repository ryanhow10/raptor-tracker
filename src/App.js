import React, { Component } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { players } from './assets/players';
import './App.css'

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
                <h1 className="title f1 white mb1">Raptor Tracker</h1>
                <Search searchChange={ this.onSearchChange }></Search>
                <Scroll>
                    <ErrorBoundary>
                        <CardList players={ filteredPlayers }></CardList>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;