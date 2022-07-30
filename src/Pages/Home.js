
import React from 'react'
import Image from 'react-bootstrap/Image'
import background from "../assets/bimage.jpg"
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Price } from './Price';
import Convience from './Convience';
import Options from './Options';
import Privacy from './Privacy';


const Styles = styled.div`
.image{
  background: url(${background})  fixed bottom;
height: 400px;
background-size: contain;
width: 100%;
}

.carousel{
  
  width: 50%;
  margin-top: 30px;

}
.carouselContainer{
  display: flex;
  align-items: center;
  justify-content: center;
}

.mb-3{
  margin: 80px;
  border: 2px solid black;
}
.title{
  text-align: center;
  
  margin-top: 40px;
  margin-bottom: -20px

}
`

export default function Home({shoes}) {
  return (
    

   <div>
    <Styles>
    <Image  className='image' >
     

    </Image>
<h5 className='title'>Why choose us?</h5>

    <Tabs
      defaultActiveKey="price"
      id="fill-tab-example"
      className="mb-3"
      fill
      
    >
      <Tab eventKey="price" title="Price">
        <Price />
      </Tab>
      <Tab eventKey="convenience" title="Convenience">
        <Convience />
        </Tab>
        <Tab eventKey="options" title="Options">
        <Options />
        </Tab>
        <Tab eventKey="privacy" title="Privacy">
        <Privacy />
        </Tab>
       
      
    </Tabs>
   

    <h5 className='title'>Window Shopping</h5>

   
<div className='carouselContainer'>
  
     <Carousel className='carousel'>{
      shoes.map((shoe)=>(
        <Carousel.Item key={shoe.id}>
        <img
          className="d-block w-100"
          src={shoe.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))
     }
     
     
    </Carousel>
  </div>

  </Styles>
    
    </div>
  )
}

