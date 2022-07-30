import React from "react";
import NewShoesForm from "./NewShoesForm"

import Search from "./Search"

function ShoesPage({shoes}){
  return (
    <main>
      <NewShoesForm shoes={shoes} />
     
      
    </main>
  )
}
export default ShoesPage