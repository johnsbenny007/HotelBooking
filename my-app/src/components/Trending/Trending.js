import React from 'react'
import './Trending.css'
function Trending() {
  return (
    <div className='Trending'>
      <h3>Get inspiration for your next trip.</h3>
      <div className='TrendingContainer'>
        <div className='TrendingItem'>
            <div className='TrendingItem1'>
                    <img className='TrendingImg1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/LosAngelesSkyline.png/1200px-LosAngelesSkyline.png?20180210213450'/>
            </div>
            <div className='TrendingItemDesc'>
                <h3>5 of the best hotels in los angels</h3>
                <span>From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angels for your stay.</span>
            </div>
        </div>
        <div className='TrendingItem'>
            <img className='TrendingImg' src='https://cf2.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o='/>
            <h4>5 of the best hotels in losangels</h4>
            <span>From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angels for your stay.</span>
        </div>
        <div className='TrendingItem'>
            <img className='TrendingImg' src='https://cf2.bstatic.com/xdata/images/xphoto/540x405/288300879.webp?k=20a291605b4d1cc6c15b1ee3f9598c22ddb81a8d5ed73135330e426f8d2b9629&o='/>
            <h4>5 of the best hotels in losangels</h4>
            <span>From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angels for your stay.</span>
        </div>
      </div>
    </div>
  )
}

export default Trending
