import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { searchChange } = this.props;
        return (
            <div className="pa2">
                <input
                    className="pa3 ba b--black bg-light-gray br-pill bw1"
                    type="search"
                    placeholder="Search Raptors"
                    onChange={ searchChange }>
                </input>
            </div>
        );
    }
}

export default Search;