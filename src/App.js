import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import Search from './components/Search';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { setSearchField } from './actions';
import { players } from './assets/players';
import './App.css'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: players,
        }
    }

    render() {
        const { searchField, onSearchChange } = this.props;
        const filteredPlayers = this.state.players.filter(player => {
            return player.firstName.toLowerCase().includes(searchField.toLowerCase()) || player.lastName.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <Header></Header>
                <Search searchChange={ onSearchChange }></Search>
                <Scroll>
                    <ErrorBoundary>
                        <CardList players={ filteredPlayers }></CardList>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);