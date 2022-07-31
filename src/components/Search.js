import React from "react"

function Search({shoes, onHandleChange }){
  function handleChange(e){
    onHandleChange(e.target.value)
  }
  return(
    <div className="searchbar">
      <label htmlFor="search">Search Shoes:</label>
      <input 
      type="text"
      id="search"
      placeholder="Type shoe name to search.."
      onChange={handleChange}
      />
    </div>
  )
}
export default Search