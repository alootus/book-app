import React from 'react';
import Slideone from './Slideone';
import Slidetwo from './Slidetwo';




export class Slider extends React.Component {
  render() {
    return (

        <div id="tg-homeslider" className="tg-homeslider tg-haslayout owl-carousel">
            <Slideone></Slideone>
            
            <Slidetwo></Slidetwo>
        </div>

    );
  }
}

export default Slider;