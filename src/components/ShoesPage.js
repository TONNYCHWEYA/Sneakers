import React from "react";
import NewShoesForm from "./NewShoesForm"

import Search from "./Search"

function ShoesPage({shoes, onHandleChange, query}){
  
  return (
    <main>
      <NewShoesForm shoes={shoes} onHandleChange={onHandleChange} query={query}/>
     
      
    </main>
  )
}
export default ShoesPage