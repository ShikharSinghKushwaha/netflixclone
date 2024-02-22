import React from 'react'
import ReactStars from 'react-rating-stars-component'
function Rating({ rating }) {
    
      return ( 
        <ReactStars
          count={5}
          size={24}
          edit={false}
          isHalf={true}
          value={rating}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
         
          />
      );
}

export default Rating
