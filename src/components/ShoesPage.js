import React from "react";
import NewShoesForm from "./NewShoesForm"

import Search from "./Search"

function ShoesPage({shoes, onHandleChange, query, onHandleCartClick}){
  
  return (
    <main>
      <NewShoesForm shoes={shoes} onHandleChange={onHandleChange} query={query} onHandleCartClick={onHandleCartClick}/>
     
      
    </main>
  )
}
export default ShoesPage