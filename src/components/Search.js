import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { searchChange } = this.props;
        return (
            <div className="pa2">
                <input
                    className="pa3 ba b--red bg-light-gray"
                    type="search"
                    placeholder="Search Raptors"
                    onChange={ searchChange }>
                </input>
            </div>
        );
    }
}

export default Search;