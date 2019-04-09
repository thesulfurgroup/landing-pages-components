import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne'>Case Study</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/too-faced-cosmetics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Too Faced</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/neutrogena-influencer-campaign/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Neutrogena</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/bh-cosmetics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>BH Cosmetics</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
