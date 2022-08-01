import React, { useState } from "react";
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
const ContainerSearch = styled.div`
margin: 20px;
.Search{
  margin-bottom: 20px;
}
`

function NewShoesForm({ shoes, onHandleChange , query, onHandleCartClick, onHandleSubmit}){
  const [clicked, setClick] = useState(false)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")


  function handleClick(){
    setClick((clicked) =>!clicked)
  }

  function handleCartClick(shoe){
    fetch(`http://localhost:6001/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: !shoe.cart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onHandleCartClick(updatedItem)); 
  }

  function handleSubmit(e){
    e.preventDefault();
    const addedShoes = {
      name: name,
      image: image,
      price: price,
      cart: false
    };
    fetch("http://localhost:6001/shoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedShoes),
    })
      .then((r) => r.json())
      .then((newItem) => onHandleSubmit(newItem));
  }

  
return(
  <div>
  <Style>
    <button onClick={handleClick}>Add New Shoes</button>
  <div className="new-shoes-form">
  { clicked ?(
    
   <form onSubmit={handleSubmit}>
    <h2>Add New Shoes</h2>
      <input type="text" name="name" placeholder="Shoes name" value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <input type="text" name="image" placeholder="Image URL" value={image} 
       onChange={(e)=> setImage(e.target.value)}/>
      <input type="text" name="price" placeholder="price" value={price}  onChange={(e)=> setPrice(e.target.value)}/>
      <button type="submit">Add Shoes</button>
          </form>) : null}
  </div>


  </Style>
  <ContainerSearch >
  <Search shoes={shoes} onHandleChange={onHandleChange} className="Search"/>
  <Row xs={1} md={3} className="g-4">
      {shoes.filter(val=>val.name.toLowerCase().includes(query.toLowerCase())).map((shoe) => (
        <Col key={shoe.id}>
          <Card bg={'outline-success'}>
            <Card.Img variant="top" src={shoe.image} />
            <Card.Body>
              <Card.Title>{shoe.name}</Card.Title>
              <Card.Text>
              Ksh {shoe.price}
              </Card.Text>
              <button onClick={()=>handleCartClick(shoe)}>{shoe.cart? "Remove from cart" : "Add to cart"}</button>
              <Card.Link href="#">Description</Card.Link>
            </Card.Body>
          </Card> 
        </Col>
      ))}
    </Row>
    </ContainerSearch>

  </div>
)
}
export default NewShoesForm
