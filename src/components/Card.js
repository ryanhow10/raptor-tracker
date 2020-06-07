import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { firstName, lastName, number, position, image } = this.props;
        return (
            <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={require(`../assets/players/${image}`)} alt={`${lastName} ${firstName}`} width="200"></img>
                
                <div>
                    <h2>#{ number } { firstName } { lastName }</h2>
                    <p>{ position }</p>
                </div>
            </div>
        );
    }
}

export default Card;