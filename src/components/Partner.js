import React, { Component } from 'react';
import './Partner.css';
import tooFacedLogo from '../img/too-faced.png';
import neutrogenaLogo from '../img/neutrogena-logo.png';
import narsLogo from '../img/nars.png';
import aveenoLogo from '../img/aveeno.png';
import bhCosmeticsLogo from '../img/bh-cosmetics-logo.png';
import evaNycLogo from '../img/eva-nyc.png';
import renSkinCareLogo from '../img/ren.png';

class Partner extends Component {
  render() {
    return (
      <section className='partnersSection'>
        <h1 className='headingOneAlt'>Meet Our Partners</h1>
        <div className='partners'>
          <img src={tooFacedLogo} alt='' />
          <img src={neutrogenaLogo} alt='' />
          <img src={narsLogo} alt='' />
          <img src={aveenoLogo} alt='' />
          <img src={aveenoLogo} alt='' />
          <img src={bhCosmeticsLogo} alt='' />
          <img src={evaNycLogo} alt='' />
          <img src={renSkinCareLogo} alt='' />
        </div>
      </section>
    );
  }
}
export default Partner;
