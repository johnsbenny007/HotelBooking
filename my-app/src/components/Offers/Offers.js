import React from 'react'
import './Offers.css'
function Offers() {
  return (
    <div className='Offers'>
        <div className='OffersContainer'>
            <div className='OffersTitle'>
                <h2>Offers</h2>
                <span>Promotions,deals&Special offers for you</span>
            </div>
            <div className='OffersOptions'>
                <div className='OfferItem'>
                   <div className='ItemTitle'>
                    <h3>Fly away to your dream vacation</h3>
                    <span>Get inspired-compare and book flights with flexibility</span>
                    <button>Search for flights</button>
                   </div>
                   <img className='OfferImg' src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=' alt='img1'/>
                </div>
                <div className='OfferItem'>
                   <div className='ItemTitle'>
                    <h3>Planning a trip to the 2024 Summer Games?</h3>
                    <span>Brussels is a quick train ride from all the action</span>
                    <button>Explore Brussels</button>
                   </div>
                   <img className='OfferImg' src='https://r-xx.bstatic.com/xdata/images/xphoto/500x500/320647664.png?k=698a838d781fe6952e506a3856a7fa5c22056d98e571eb3cf9e448afa98eba81&o=' alt='img1'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Offers
