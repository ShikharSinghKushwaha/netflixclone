import React from 'react'
import { useState, useEffect} from 'react'
import './Movies.css'
import ShowImage from './ShowImage';
import PageBtn from './PageBtn';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'
import SearchItem from './SearchMovies';

function Movies( { selectedCategories }) {
  
  const [ movies, setMovies] = useState([]);
  const [ page ,setPage] = useState(1);
  let [totalPage, setTotalPage] = useState();
  const [ searchItem, setSearchItem] = useState('');
  const [ searchMovie, setSearchedMovie ] = useState([])
  const [ loading, setLoading ] = useState(false);
  const [ show, setShow] = useState(false);

  const navigate = useNavigate();

 useEffect(() => {
  if(localStorage.getItem('sign-in') || localStorage.getItem("registered")){
    navigate('/dashboard')
    }else{
      navigate('/signin')
    }
 }, [])

  useEffect(() => {

    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_NETFLIX_API_AUTH_TOKEN}`
        }
      };
      setLoading(true)
      
      fetch(`https://api.themoviedb.org/3/movie/${selectedCategories ? selectedCategories : 'now_playing'}?language=en-US&page=${localStorage.getItem('page')}`, options)
        .then(response => {
             return response.json();
            })
        .then(response => {
          
            let check = response.results;
           setMovies(check || [])
           setTotalPage(response.total_pages)
           setLoading(false)
          
        })
        .catch(err => console.error(err));
      
    },[selectedCategories,page,searchMovie])
  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_NETFLIX_API_AUTH_TOKEN}`
        }
      };
     
        try {
          fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&include_adult=false&language=en-US&page=1`, options)
          .then(response => {
            return response.json();
           })
       .then(response => {
         
           let check = response.results;
         setSearchedMovie(check || [])  
       })
        } catch (error) {
          console.error(error);
        }
      

    }, [searchItem]);
    

//localStorage.setItem('page',1)
useEffect(() => {
  if (selectedCategories) {
    localStorage.setItem('page', page);
  }
}, [selectedCategories, page]);

function incrementPage() {
  setPage((prevPage) => prevPage + 1);
}

function prevPage() {
  setPage((prevPage) => Math.max(prevPage - 1, 1));
}
  return (
    <div>
        <div className="movies_container"> 
         <SearchItem search={setSearchItem} /> 
             
             {loading ? <Loader /> : <ShowImage data={ searchItem ? searchMovie : movies } /> }

             {searchItem ? show &&  <div className="btn-container">
              <PageBtn className="page_btn" onClick={prevPage} type='Prev'/>
              <p style={{color:'white',fontSize:'16px',padding:'5px'}}> { `Page ${page} of ${totalPage ? totalPage : ''}`}</p>

              <PageBtn  className="page_btn" onClick={incrementPage} type='Next'/>
              </div> :  
              <div className="btn-container">
              <PageBtn className="page_btn" onClick={prevPage} type='Prev'/>
              <p style={{color:'white',fontSize:'16px',padding:'5px'}}> { `Page ${localStorage.getItem('page')} of ${totalPage ? totalPage : ''}`}</p>

              <PageBtn  className="page_btn" onClick={incrementPage} type='Next'/>
              </div> }
        
        </div>
    </div>
  )
}

export default Movies
