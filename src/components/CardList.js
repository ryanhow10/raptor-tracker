import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const { players } = this.props;
        const cardsArray = players.map((player, i) => {
            return (<Card 
                key={ players[i].firstName }
                firstName={ players[i].firstName } 
                lastName={ players[i].lastName } 
                number={ players[i].number } 
                position={ players[i].position } 
                image={ players[i].image }>
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