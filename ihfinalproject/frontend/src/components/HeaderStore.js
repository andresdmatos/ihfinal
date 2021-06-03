import React from 'react';
import {Carousel}from 'react-bootstrap';

const HeaderStore = ()=>{
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.sportsimports.com/wp-content/uploads/volleyball_training_equipment.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>All you need for Training</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.soccer.com/wcm/connect/b19aec84-2b71-4247-950d-6364daafa8e3/checklist-header.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b19aec84-2b71-4247-950d-6364daafa8e3-nfKx1.F"
    />

    <Carousel.Caption>
      <h3>
Ultimate Soccer Equipment </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bsnsports.com/sports-landing/images/basketball.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
};

export default HeaderStore;