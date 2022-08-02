import React, {useEffect, useState} from "react";
import Header from "./Header"
import ShoesPage from "./ShoesPage"
import About from "../Pages/About";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Navbarcomp from "../Pages/Navbarcomp";
import {
  
  Switch,
  Route,
 
} from "react-router-dom";
import FooterContainer from '../container/FooterContainer'


function App() {
  const [shoes, setShoes] = useState([]);
  const [query, setQuery] = useState("")
  function onHandleChange(searchedWord){
    setQuery(searchedWord)
  }

  useEffect(()=>{
    const devEnv = process.env.NODE_ENV !== "production"
    console.log(devEnv)
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env
    console.log(REACT_APP_DEV_URL)

    fetch(`${devEnv? REACT_APP_DEV_URL : REACT_APP_PROD_URL}`)
    .then((r) => r.json())
    .then((data) => setShoes(data))
  },[])

  function onHandleSubmit(newShoe){
    setShoes([...shoes, newShoe])
  }


  function onHandleCartClick(updateItem){
    const updateItems = shoes.map((shoe)=>{
      if(updateItem.id === shoe.id){
        return updateItem
      }else{
        return shoe
      }
      
    })
    setShoes(updateItems)
  }
  return (
    <div className="App">
      <Navbarcomp shoes={shoes}/>
      
<Switch>
          <Route path="/shoesPage">
            <ShoesPage />
          </Route>
          <Route path="/product">
            <ShoesPage shoes={shoes} onHandleChange={onHandleChange} query={query} onHandleCartClick={onHandleCartClick} onHandleSubmit={onHandleSubmit}/>
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home shoes={shoes}/>
          </Route>
        </Switch>
        
<FooterContainer />
    </div>
  );
}

export default App;
