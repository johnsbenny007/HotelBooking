import React from 'react'
import './SearchItem.css'
import { Link } from 'react-router-dom'
const SearchItem = ({item}) => {
  return (
    <div className='SearchItems'>
        <div className='SearchImg'>
            <img src='https://cf2.bstatic.com/xdata/images/hotel/square240/110876275.webp?k=5cb179087bf4b7cebba9796c80ec5e2c7e9d3670b48c3cb6abc22eff08f2958f&o='/>
        </div>
        
        <div className='PlaceDetails'>
            <h3>{item.name}</h3>
            <span>{item.distance} from center</span>
            <span>Free airport taxi</span>
            <span>{item.desc}</span>
            <span>Entire studio . 1 bathroom . 21m 1 free bed</span>
            <span>Free Cancellation</span>
            <span>You can cancel later,so lock in this great price today!</span>
        </div>
        <div className='PlaceRating'>
            {item.rating && <div className='Rating'>
                <span>Excellent</span>
                <span>8.9</span>
            </div>}
            <div className='SearchPrice'>
                <span>${item.cheapestPrice}</span>
                <span>includes taxes and fees</span>
               <Link to={`/hotels/${item._id}`}><button>see availability</button></Link> 
            </div>
        </div>
       
    </div>
  )
}
export default SearchItem
