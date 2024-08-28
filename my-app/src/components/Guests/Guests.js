import React from 'react'
import './Guests.css'
import useFetch from '../../hooks/useFetch'
function Guests() {
    const {data,loading,error}=useFetch("http://localhost:8000/api/hotel?featured=true&Rating=8");
    data.map(item=>{console.log(item)})
  return (
    <div className='Guests'>
      <h3>Homes Guests Love</h3>
      <div className='GuestsContainer'>
       
       {loading ?"loading" :  <> 
        {data.map(item=>(
            <div className='GuestItem' >
            <img className='ItemImg' src={item.photos[0]}/>
            <div className='CardDesc'>
                <span className='CardTitle'>{item.name}</span>
                <span className='CardPlace'>{item.city}</span>
                <div className='CardRating'>
                    <span className='Rating'>{item.rating}</span>
                    <span className='Impression'>Excellent.</span>
                    <span className='Review'>2963 reviews</span>
                </div>
                <span className='Price'>Starting from<strong> ₹ {item.cheapestPrice}</strong></span>
            </div>
        </div>
        ))
        }</>}
   
      </div>
    </div>
  )
}

export default Guests
