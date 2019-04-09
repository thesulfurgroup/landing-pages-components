import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Cards from './Cards';
import CaseStudy from './CaseStudy';
import Partner from './Partner';
import Ignite from './Ignite';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Cards />
        <CaseStudy />
        <Partner />
        <Ignite />
        <Footer />
      </div>
    );
  }
}

export default App;
