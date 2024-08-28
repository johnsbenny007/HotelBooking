import React, { useState,useEffect, Children, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi, faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
function Header({type}) {
  const [dates,setDates]=useState([{
    startDate: new Date(),
    endDate:new Date(),
    key:'selection'
  } 
  ]);
  const [options,setOption]=useState({
    adult:1,
    children:0,
    rooms:0,
  })
  const [destination,setDestination]=useState();
  const [openOption,setopenOption]=useState(false);
  const [open,setOpen]=useState(false);
  const handleClick =()=>{
    setOpen(!open);
  }
  const handlebuttonclick=(category,variable)=>{
    setOption(prev=>{return{
      ...prev,[category]:variable === 'i'? options[category]+1 : options[category]-1,
    }})
  }
  const {dispatch}=useContext(SearchContext);
  const navigate=useNavigate();
  const handleSearchClick=()=>{
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
    navigate("/hotels",{state:{options,dates,destination}})
  }
  return (
    <div className='Header'>
      <div className='HeaderContainer'>
        <div className='HeaderOptions'>
          <div className='OptionItem1'>
            <FontAwesomeIcon icon={faBed} />
            <span className='OptionName'>Stays</span>
          </div>
          <div className='OptionItemActive'>
            <FontAwesomeIcon icon={faPlane} />
            <span className='OptionName'>Flights</span>
          </div>
          <div className='OptionItemActive'>
            <FontAwesomeIcon icon={faCar} />
            <span className='OptionName'>Car Rentals</span>
          </div>
          <div className='OptionItemActive'>
            <FontAwesomeIcon icon={faTaxi} />
            <span className='OptionName'>Airport Taxi</span>
          </div>
        </div>
        <div className='HeaderHeading'>
          <h1 className="Heading">Find Your Next Stay</h1>
          <h4 className='HeaderDesc'>Search deals on hotels,homes and much more</h4>
        </div>
        {
        type !== "list" && 
        <>
        <div className='HeaderSearch'>
          <div className='SearchItem'>
            <FontAwesomeIcon icon={faBed} className='SearchIcon'/>
            <input type='text' className='SearchText' placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)}/>
          </div>
          <div className='SearchItem'>
            <FontAwesomeIcon icon={faCalendar} className='SearchIcon'/>
            <span className='SearchDate' onClick={()=>handleClick()}>{`${format(dates[0].startDate,"MM/dd/yyyy")}-${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
              { open &&  <DateRange
                editableDateInputs={true}
                onChange={item=>setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className='Datepicker'
                />}
          </div>
          <div className='SearchItem'>
            <FontAwesomeIcon icon={faUser} className='SearchIcon'/>
            <span onClick={()=>setopenOption(!openOption)} className='SearchCount'>{`${options.adult} adult. ${options.children} children. ${options.rooms} rooms`}</span>
            {openOption && <div className='Options'>
              <div className='OptionsContainer'>
                <div className='OptionItem'>
                  <span className='OptionAdult'>Adult</span>
                  <div className='Optionbutton'>
                    <button
                    disabled={options.adult===0}
                    onClick={()=>handlebuttonclick("adult","d")} className='OptionDec'>-</button>
                    <span className='optionCount'>{options.adult}</span>
                    <button onClick={()=>handlebuttonclick("adult","i")} className='OptionInc'>+</button>
                  </div>
                </div>
                <div className='OptionItem'>
                  <span className='OptionAdult'>Children</span>
                  <div className='Optionbutton'>
                    <button
                    disabled={options.children===0}
                    onClick={()=>handlebuttonclick("children","d")} className='OptionDec'>-</button>
                    <span className='optionCount'>{options.children}</span>
                    <button onClick={()=>handlebuttonclick("children","i")} className='OptionInc'>+</button>
                  </div>
                </div>
                <div className='OptionItem'>
                  <span className='OptionAdult'>Rooms</span>
                  <div className='Optionbutton'>
                    <button
                    disabled={options.rooms<=0}
                    onClick={()=>handlebuttonclick("rooms","d")} className='OptionDec'>-</button>
                    <span className='optionCount'>{options.rooms}</span>
                    <button onClick={()=>handlebuttonclick("rooms","i")} className='OptionInc'>+</button>
                  </div>
                </div>
              </div>
            </div>}
          </div>
          <div className='SearchItem'>
            <button onClick={()=>{handleSearchClick()}} className='SearchBtn'>Search</button>
          </div>
        </div></>}
      </div>
      
    </div>
  )
}

export default Header
