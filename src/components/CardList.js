import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const { players } = this.props;
        const cardsArray = players.map((player, index) => {
            return (<Card 
                key={ index }
                firstName={ player.firstName } 
                lastName={ player.lastName } 
                number={ player.number } 
                position={ player.position } 
                instagram={ player.instagram }
                twitter={ player.twitter }
                image={ player.image }>
                </Card>
            ) 
        });
        return (
            <div>
                { cardsArray }
            </div>
        );
    }
}

export default CardList;