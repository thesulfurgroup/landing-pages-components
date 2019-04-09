import React, { Component } from 'react';
import './Footer.css';
import Button from './Button';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footerTop'>
          <div className='contactUs'>
            <h3>Contact Us</h3>
            <p>
              <a href='mailto:Hello@TheSulfurGroup.com'>
                Hello@TheSulfurGroup.com
              </a>
            </p>
            <p>
              <a href='tel:+12135452744'>Phone: (213) 545-2744</a>
            </p>
          </div>
          <Button btnStyles='' buttonLabel='Get Lit' />
        </div>
        <div className='footerBottom'>
          <p>
            © Copyright 2019 -{' '}
            <span className='magicalLine'>The Sulfur Group.</span> All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
