import React, {Component} from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import images from './images.json';
import swal from 'sweetalert';
import { fchown } from 'fs';
import { tsConditionalType } from '@babel/types';


class App extends Component {
  state = {
    images,
    clickedImage: [],
    score: 0
  }
};

// when a image is clicked it is taken out of the array
imageClick = event => {
  const currentImages = event.target.alt;
  const imagesAlreadyClicked = this.state.clickedImage.indexOf(currentImages) > -1;

  // If an image that has been clicked on already is clicked it resets the score and reshuffles the images. 
  if (imagesAlreadyClicked) {
    this.setState({
      images: this.state.images.sort(function(a, b){
        return 0.5 - Math.random()
      }),
      clickedImage: [],
      score: 0
    });
    swal({
      title: "Not today",
      text: "You sould get more cultured and then try again.",
      button: "Once more?"
    });
    // When an image is clicked that hasn't been clicked before it adds +1 to the score
  } else {
    this.setState(
      {
        images: this.state.images.sort(function(a, b){
          return 0.5 - Math.random()
        }),
        clickedImage: this.state.concat(
          currentImages
        ),
        score: this.state.score + 1
      },
      // when all 12 images are clicked you get a message saying good job.  Board also resets.
      () => {
        if (this.state.score === 12) {
          swal({
            title: "WOW!",
            text: "YOU ARE CLASSY, GOOD JOB!",
            button: "Again?",
          });
          this.setState({
            images: this.state.images.sort(function(a, b){
              return 0.5 - Math.random();
            }),
            clickedImage: [],
            score: 0
          });
        };
      }
    );
  }
};

// Componets are rendered in the following order: navbar, 
export default App;
