import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Movies from './Movies'
import ShowImage from './ShowImage.js'
import './Dashboard.css'
function Dashboard() {
  const [ getData , setData] = useState('');
  let categories = ['Now Playing',"Popular",'Top Rated','Upcoming'];
 
  function handleClick(e){
  let  dataSplit = e.split(" ").join("_").toLowerCase();
  setData(dataSplit);
  localStorage.setItem('page',1);
 //localStorage.getItem('page') 
} 
  return ( 
    <div> 
      <div>
       <div className="sidebar_container">
           <div className="categories" >
              {categories.map((data,index) => (
              
                <div key={index} className="categories_name">
                   <h3 onClick={() => handleClick(data)}>{data}</h3>
                  </div>
              ))}
              
            </div>
       </div>
       <Movies selectedCategories={getData} />
      
       </div>
      
    </div>
  )
}

export default Dashboard
