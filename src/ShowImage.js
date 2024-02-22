import React from 'react'
import './Movies.css'
import { NavLink } from 'react-router-dom'
import PageBtn from './PageBtn'

function ShowImage({ data,isLoad }) {
  return (
    <main>

<div>
  <section>
      
        <div className='all_movies'>
      {data.map((item,index)=> (
            <NavLink key={index} to={`/movie/${item.id}`} style={{textDecoration:'none'}}>
             
                <div  className="movies">
                  <div className="image_container">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                  </div>
                  <div className="info" >
                  <h4 >{item.release_date.slice(0,4)}</h4>
                  <h2>{item.title}</h2>
                    
                  </div>
                </div>
                </NavLink>
               ))}

               </div>

             

               </section>
    </div>
    </main>
  )
}

export default ShowImage
