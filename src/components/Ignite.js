import React, { Component } from 'react';
import './Ignite.css';
import Card from './Card';

class Ignite extends Component {
  render() {
    return (
      <section className='igniteSection'>
        <h1 className='headingOneAlt'>Let's Ignite Your Brand</h1>
        <div className='igniteCards'>
          <Card
            cardIcon={null}
            cardTitle='Campaign Management'
            cardText='We live according to our tried and true method so let us take care of the everything. From creative strategies to brand awareness, we have in-house experts with 5+ years of experience. Blending together all components to shine in harmony, we will take your company’s brand to a higher standard.'
          />
          <Card
            cardTitle='Influencer Marketing'
            cardText='The best brands make you stop and say “how did they get that look” by telling a compelling story. We are storytellers who create impactful journeys for your audience to follow & thoughtful content for beauty gurus across the spectrum to appreciate.'
          />
          <Card
            cardTitle='Creative Development'
            cardText='Behind every beautiful person is an expert team of stylists ready to tackle any challenge ahead of them. Our expert team is composed of designers, copywriters, and marketers who venture to produce the highest quality of engaging content to develop your brand identity, culture and your story.'
          />
        </div>
      </section>
    );
  }
}
export default Ignite;
