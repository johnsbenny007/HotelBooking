import {faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './Reserve.css';
import axios from 'axios';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
const Reserve = ({setopen,hotelid}) => {
    const {data,loading,error}=useFetch(`http://localhost:8000/api/hotel/room/${hotelid}`);
    const {dates}=useContext(SearchContext);
    const [savedRooms,setRooms]=useState([]);
    const navigate=useNavigate();
    console.log(dates);
    const getDatesInRange = (startDate, endDate) => {
      const dateList = [];
      let currentDate = new Date(startDate);
  
      while (currentDate <= endDate) {
          dateList.push(currentDate.getTime());
          currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }
  
      return dateList;
  };
    const daterange=getDatesInRange(dates[0].startDate,dates[0].endDate);
    const handleChange=(e)=>{
      const check=e.target.checked;
      const value=e.target.value;
      setRooms((prev)=>(check?[...prev,value]:prev.filter(val=>val!==value)));
    }
    const isAvailable=(roomNumber)=>{
      const isfound=roomNumber.unavailbaleDates.some((date)=>(
        daterange.includes(new Date(date).getTime())
      ));
      let isFound=!isfound;
      console.log(isfound)
      return isfound;
    }
    console.log(savedRooms);
    const handleClick=async()=>{
      await Promise.all(savedRooms.map((roomid)=>{
        axios.put(`http://localhost:8000/api/room/availibility/${roomid}`,{dates:daterange});
        console.log("updated room");
        navigate('/');
      }))
    }
  return (
       <div className='Rooms'>
            <div className='RoomsContainer'>
                <h3>Reserve Now!</h3>
                <FontAwesomeIcon className='close-icon' icon={faCircleXmark} onClick={()=>setopen(false)}/>
                  {data.map((item)=>(
                      <div className='RoomItem'>
                        <span>{item.title}</span>
                        {item.roomNumbers.map((room)=>(
                          <div className='Room'>
                            <label>{room.number}</label>
                            <input disabled={isAvailable(room)} onChange={e=>handleChange(e)} type='checkbox' id={room._id} value={room._id}></input>
                          </div>))}
                      </div>
                  ))}
              <button onClick={handleClick} className='reserve-button'>Reserve Now</button>
            </div>
        </div>
  )
}
export default Reserve