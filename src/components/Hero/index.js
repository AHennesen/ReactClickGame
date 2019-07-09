import React from 'react';
import "./hero.css";

function Hero() {
  return (
    <section className='hero has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <img className="title-logo" src='https://media.istockphoto.com/photos/colorful-color-splash-paintbrush-row-picture-id512403150' alt='Painting game' />
          <h2 className='subtitle'>
            Click on a painting to earn points, if you click on the same painting twice you lose.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero