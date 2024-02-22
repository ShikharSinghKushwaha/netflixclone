import React from 'react'
import './Movies.css'
function SearchItem({ search }){
  return(
    <div>
         <div className='search_container'>
         <form className="search-bar">
          <input type="text" 
              placeholder='Search Movies.'
          onChange={(e) =>{search(e.target.value)}}
          
          />
        
          </form>
          </div>
    </div>
  );
}

export default SearchItem;