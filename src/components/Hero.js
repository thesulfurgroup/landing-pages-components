import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';

class Hero extends Component {
  render() {
    return (
      <section className='heroSection'>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Break-Free From The. <span className='magicalLine'>Norm.</span>
          </h1>
          <p className='heroContentCopy'>
            We're here to forge meaningful companies and oridinary people to
            propel your brand from everyday essentials to vital
            swear-by-products.
          </p>
          <Button buttonLabel='Ignite Your Marketing' />
        </div>
      </section>
    );
  }
}

export default Hero;
