import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ShowImage from './ShowImage';
import Loader from './Loader';

function SimilarMovies(){
const [ similar, setSimilar ] = useState([]);
const [ loading , setLoading] = useState(false)
const { id } = useParams();


useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_NETFLIX_API_AUTH_TOKEN}`
        }
      };
      setLoading(true)
      fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
      
            setSimilar(response.results)
            setLoading(false)
        })
        .catch(err => console.error(err));
    }, [id]);
 return (
    <div style={{marginTop:'30px'}}>
             {loading ? <Loader /> :
             <div>
             <h1 style={{color:'white',textAlign:'center',fontSize:'28px'}}>You Might also Like </h1>

              <ShowImage data={similar} />
              </div> }

        </div>
 );
}

export default SimilarMovies;