import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './Feedback.css';

function Feedback() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <h3>
              Nulla vitae elit libero, a pharetra augue mollis interdum
          </h3>
          <Carousel.Caption>
            <p>Nulla vitae elit libero.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
              Nulla vitae elit libero, a pharetra augue mollis interdum
          </h3>
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
  
        <h3>
              Nulla vitae elit libero, a pharetra augue mollis interdum
          </h3>
          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Feedback;