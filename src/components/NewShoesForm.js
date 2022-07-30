import React from "react";
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Search from "./Search"

const Style = styled.div`
display: flex;
align-items: center;
justify-content: center;


.new-shoes-form{
  border: 2px solid black;
  background-color: green;
  margin: 20px;
  width: 50%;
  padding: 20px;
  max-width: 300px;
  
}
.new-shoes-form form input{
  display: flex;
  margin-top: 10px;
}
button{
  margin-top: 10px;
}
`

function NewShoesForm({ shoes }){
return(
  <div>
  <Style>
    <button>Add New Shoes</button>
  <div className="new-shoes-form">
    <h2>New Shoes</h2>
    <form>
      <input type="text" name="name" placeholder="Shoes name" />
      <input type="text" name="image" placeholder="Image URL" />
      <input type="number" name="price" placeholder="price" />
      <button type="submit">Add Shoes</button>
          </form>
  </div>


  </Style>
  <Search />
  <Row xs={1} md={3} className="g-4">
      {shoes.map((shoe) => (
        <Col key={shoe.id}>
          <Card bg={'outline-success'}>
            <Card.Img variant="top" src={shoe.image} />
            <Card.Body>
              <Card.Title>{shoe.name}</Card.Title>
              <Card.Text>
              Ksh {shoe.price}
              </Card.Text>
              <button>Add to cart</button>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> 
        </Col>
      ))}
    </Row>

  </div>
)
}
export default NewShoesForm
