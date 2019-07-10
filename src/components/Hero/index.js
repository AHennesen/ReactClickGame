import React from 'react';
import "./style.css";

function Hero() {
  return (
    <section className='hero has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <img className="title-logo" src='https://live.staticflickr.com/7080/7045754353_69be16c74d_b.jpg' alt='Painting game' />
          <h2 className='subtitle'>
            Click on a painting to earn points, if you click on the same painting twice you lose.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero