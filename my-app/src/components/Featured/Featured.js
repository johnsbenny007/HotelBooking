import React from 'react'
import './Featured.css'
import useFetch from '../../hooks/useFetch'
function Featured() {
  const {data,loading,error}=useFetch("http://localhost:8000/api/hotel/countbycity?cities=Goa,ooty,Mumbai,New Delhi,Banglore,Munnar");
  console.log(data);
  return (
    <div className='Featured'>
      <div className='FeaturedTitle'>
        <h3>Explore India</h3>
        <span>These popular destinations have a lot to offer</span>
      </div>
      {loading ?"loading":<><div className='FeaturedItems'>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://q-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o='/>
            <h5>Goa</h5>
            <span>{data[0]} properties</span>
        </div>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o='/>
            <h5>ooty</h5>
            <span>{data[1]} properties</span>
        </div>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o='/>
            <h5>Mumbai</h5>
            <span>{data[2]} properties</span>
        </div>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o='/>
            <h5>New Delhi</h5>
            <span>{data[3]} properties</span>
        </div>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://r-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o='/>
            <h5>Banglore</h5>
            <span>{data[4]} properties</span>
        </div>
        <div className='FeaturedItem'>
            <img className='FeaturedImg' src='https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o='/>
            <h5>Munnar</h5>
            <span>{data[5]} properties</span>
        </div>
      </div></>}
    </div>
  )
}

export default Featured
