import React, { Component } from 'react';
import './Card-backup.css';

class CardBackup extends Component {
  render() {
    return (
      <div className='card'>
        <div className='cardImage' />
        <div className='cardDetails'>
          <h1>{this.props.propertyName}</h1>
          <hr />
          <a href='/' target='_blank'>
            View More >
          </a>
        </div>
      </div>
    );
  }
}
export default CardBackup;
