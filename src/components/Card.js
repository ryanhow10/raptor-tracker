import React, { Component } from 'react';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends Component {
    render() {
        const { firstName, lastName, number, position, instagram, twitter, image } = this.props;
        return (
            <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw1 shadow-5 ba b--black">
                <img src={require(`../assets/players/${image}`)} alt={`${lastName} ${firstName}`} width="200" ></img>
                <div>
                    <h2>#{number} {firstName} {lastName}</h2>
                    <p>{position}</p>
                    <div className="tc">
                        <a href={instagram} target="_blank" rel="noopener" className="pr1 red"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        <a href={twitter} target="_blank" rel="noopener" className="pl1 red"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;