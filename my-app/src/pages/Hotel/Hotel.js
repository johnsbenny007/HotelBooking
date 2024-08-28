import React, { useContext, useEffect, useState } from 'react'
import './Hotel.css';
import MailList from '../../components/MailList/Maillist.js'
import Navbar from '../../components/Navbar/Navbar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.js'
import useFetch from '../../hooks/useFetch.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.js';
import { AuthContext } from '../../context/AuthContext.js';
import Reserve from '../../components/Reserve/Reserve.js';

const Hotel = () => {
  const images=[{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/25386003.jpg?k=f9751644c8bd3e898216a71d9a98a0c2b769f5bc9fc732ab04db9cabf90a4019&o=&hp=1"
  },{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/25387257.jpg?k=64a3530a5e4f41eb7eddfb1180d3e1be15e57925dd2e0ec32f9096e8655e890d&o=&hp=1"
  },{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/243527985.jpg?k=e0254a807ac3e8ee3b28e4eb02c90ff63850fef64a94e4f2106dde024a9a464a&o=&hp=1"
  },{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/243526476.jpg?k=19d5155b5ce69a993f7710d6726257963e13a1211acd31503d11291fc1132569&o=&hp=1"
  },{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/25385871.jpg?k=1ea25410ad137abfecd4ad1b108c0db6cebb19865d0a88e5609d01a6830f40f2&o=&hp=1"
  },{
    src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/25386717.jpg?k=6973691cb558a4887f0abac5f10ac64c8f67ad00e88cae4eb23c3ef33d777033&o=&hp=1"
  }
]
const [open,setOpen]=useState(false);
const [openmodal,setOpenmodal]=useState(false);
const [count,setCount]=useState(0);
const setClick=(i)=>{
  setOpen(true);
  setCount(i);
}
const location=useLocation();
const id=location.pathname.split('/')[2];
const {data,loading,error}=useFetch(`http://localhost:8000/api/hotel/find/${id}`)
const {dates,options}=useContext(SearchContext);
const {user}=useContext(AuthContext);
const navigate=useNavigate();
const timeDifference = dates[0].endDate.getTime() -dates[0].startDate.getTime();
const dayDifference = (timeDifference / (1000 * 3600 * 24))+1;

const arrow=(direction)=>{
  let newSlideNo;
  if(direction ==="l"){
    newSlideNo = count===0 ? 5 :count-1; 
  }
  else{
    newSlideNo = count===5 ? 0 : count +1;
  }
  setCount(newSlideNo);

}
const handleClick=()=>{
  if(user){
    setOpenmodal(true);
  }
  else{
    navigate('/login');
  }
}
  return (
      <div className='Hotel'>
        <Navbar/>
        <Header type='list'/>
        {open && <div className='Slider'>
                  <FontAwesomeIcon onClick={()=>arrow("l")} className='iconleft' icon={faCircleArrowLeft}/>
                  <div className='SliderWrapper'>
                    <img src={images[count].src}/>
                  </div>
                  <FontAwesomeIcon onClick={()=>arrow("r")} className='iconright' icon={faCircleArrowRight}/>
                  <FontAwesomeIcon className='cross' icon={faCircleXmark} onClick={()=>setOpen(false)}/>
                </div>}
        <div className='HotelMain'>
          <div className='HotelMainContainer'>
            <div className='HotelContainer'>
              {loading?"loading":<><div className='Hotelheading'>
                <h3 className='Heading'>{data.name}</h3>
                <div className='location'>
                  <FontAwesomeIcon icon={faLocationDot}/>
                  <span>{data.address}</span>
                </div>
                <span>Excellent location- {data.distance} from center</span>
                <span>Book a stay over $114 at this property and get a free airport taxi</span>
              </div></>}
              <div className='HotelReserveBtn'>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
            <div className='HotelImages'>
                {images.map((image,i)=>(
                  <div className='ImageWrapper'>
                    <img onClick={()=>setClick(i)} src={image.src}/>
                  </div>
                ))}
            </div>
            <div className='HotelDetails'>
              <div className='HotelDescription'>
                <h3>Stay in the Heart of Karkow</h3>
                <p>Within walking distance from Las Ramblas, Plaza de Catalunya and Passeig de Gràcia,
                  Cien is set in a 19th-century building. It offers air-conditioned rooms and free Wi-Fi.
                  Cient's 8 rooms feature warm, minimalist décor, heating, a flat-screen TV and a private 
                  bathroom with shower.
                  There is a terrace where guests can have breakfast. Coffee and snacks are provided in the 
                  lounge area throughout the day.
                  The property is less than 5 minutes’ walk from Universitat, Catalunya or Passeig de Gràcia Metro stations.
                  Centrally located, Cien is close to Barcelona’s main shopping area. Numerous bars and restaurants 
                  serving national and international food can be found nearby.
                  You can catch buses to Barcelona Airport from Plaza Catalunya, while trains to the airport and coastal town of Sitges leave from Passeig de Gracia Train Station, 820 feet away.
                  Couples in particular like the location – they rated it 9.6 for a two-person trip.</p>
              </div>
              <div className='HotelReserve'>
                  <h1>Perfect for {dayDifference} night stay!</h1>
                  <span>Located in the real heart of Barcelona, this property has an excellent location score of 9.6!</span>
                  <h1>${dayDifference*data.cheapestPrice*options.rooms} ({dayDifference} nights)</h1>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        {openmodal && <Reserve setopen={setOpenmodal} hotelid={id}/>}
        <MailList/>
        <Footer/>
      </div>
  )
}

export default Hotel
