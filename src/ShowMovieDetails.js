import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageBtn from './PageBtn'
import './MovieDetails.css'
import Loader from './Loader'
import SimilarMovies from './Similar'
import Rating from './Rating'

function ShowMovieDetails() {
    const { id } = useParams();

    const [ movies, setMovies] = useState([]);
    const [ loading , setLoading] = useState(false);
    
    // Fetching data from API when the component mounts.
    useEffect(() => {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:`Bearer ${process.env.REACT_APP_NETFLIX_API_AUTH_TOKEN}`
          }
        }; 
        setLoading(true)
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
          .then(response => {
               return response.json(); 
              }) 
          .then(response => {
              let check = response; 
             setMovies(check || [])

             setLoading(false)
          })
          .catch(err => console.error(err));
  
      },[id])
      

        let totalRating = parseFloat(movies.vote_average / 2).toFixed(1);
  return (

    <div >
      <div className="details_container">
       {loading ? <Loader /> :  
        <div className="child_container">
        
        {/* <div> */}
          <div className="movie_image">
            <img src= {`https://image.tmdb.org/t/p/w500${movies.poster_path}`} />
          </div>
          <div className="movie_info">
        <h1 style={{color:'white'}}>{movies.title ? movies.title : "Loading..."}</h1>
        <h2 style={{color:'white',marginTop:'15px',marginBottom:'15px',fontWeight:'normal'}}>{movies.tagline}</h2>

        <div style={{display:'flex',alignItems:'center',gap:'10px',justifyContent:'flex-start'}}>
        <h2 style={{color:'white',marginTop:'15px',marginBottom:'15px',fontWeight:'normal'}}>{totalRating}</h2>
          <span style={{marginTop:'-5px'}}>
          <Rating  rating ={totalRating} />
          </span>
          </div>
       
        <div className="genres_container">
          {/* { genresItem.map((item) =>  ( */}
            <div>
              <h2 className="genres-name">Length</h2>
              <h3  className="general_info">{movies.runtime} min</h3>
            </div>
             <div>
              <h2 className="genres-name">Language</h2>
              <h3 className="general_info">{movies.spoken_languages && movies.spoken_languages[0].name}</h3>
            </div> 
            <div>
              <h2 className="genres-name">Status</h2>
              <h3 className="general_info">{movies.status}</h3>
            </div> 
            <div>
              <h2 className="genres-name">Year</h2>
              <h3 className="general_info">{movies.release_date && movies.release_date.slice(0,4)}</h3>
              
            </div> 
         
        </div>
        <div className="genres">
          <h2>Genres</h2>
           {movies.genres && movies.genres.map((item,index) => (
            <p className='genre_item' key={index}>{item.name}</p>
           ))}
            </div>
          <div className="genres">
            <h2>Synopsis</h2>
            <p className='overview'>{movies.overview}</p>
          </div>
          <div style={{display:'flex',alignItems:'center', justifyContent:'space-around', marginTop:'20px'}} >
        <PageBtn onClick={() => window.history.back()} type="Go Back" />
        <a target="_blank" href={`https://www.imdb.com/title/${movies.imdb_id}/`}><PageBtn type="IMDB"/> </a>
      </div>
      </div>
    
      </div>}
      <div style={{marginTop:'30px'}}>
      <SimilarMovies />
      </div>

      </div>
    </div>
  )
}

export default ShowMovieDetails
