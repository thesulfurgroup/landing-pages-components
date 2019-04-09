import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img
          className='cardIcon'
          src={this.props.cardIcon ? this.props.cardIcon : null}
          alt=''
        />
        <div className='cardDetails'>
          <h2>{this.props.cardTitle}</h2>
          <hr className='cardLine' />
          <p>{this.props.cardText}</p>
        </div>
      </div>
    );
  }
}
export default Card;
