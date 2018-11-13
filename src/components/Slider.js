import React from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';




export class Slider extends React.Component {
  render() {
    return (

        <div id="tg-homeslider" className="tg-homeslider tg-haslayout owl-carousel">
            <SlideOne></SlideOne>
            
            <SlideTwo></SlideTwo>
            <p>TEST</p>
        </div>

    );
  }
}

export default Slider;