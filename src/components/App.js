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
  useEffect(()=>{

    fetch("http://localhost:6001/shoes")
    .then((r) => r.json())
    .then((data) => setShoes(data))
  },[])
  return (
    <div className="App">
      <Navbarcomp />
      
<Switch>
          <Route path="/shoesPage">
            <ShoesPage />
          </Route>
          <Route path="/product">
            <ShoesPage shoes={shoes}/>
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
