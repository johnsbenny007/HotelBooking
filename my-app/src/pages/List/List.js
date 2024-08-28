import React, { useState } from 'react'
import './List.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/SearchItem/SearchItem'
import useFetch from '../../hooks/useFetch'

const List = () => {
    const location=useLocation();
    const [options,setOption]=useState(location.state.options);
    const [date,setDate]=useState(location.state.dates);
    const [destination,setDestination]=useState(location.state.destination);
    const [min,setMin]=useState(undefined);
    const [max,setMax]=useState(undefined);
    const {data,loading,reFetch}=useFetch(`http://localhost:8000/api/hotel/selectbycity?city=${destination}&max=${max || 2000}&min=${min || 20}`)
    const [searchDate,setsearchDate]=useState([{
        startDate:new Date(),
        endDate:new Date(),
        key:"selection",
    }])
    const [opensearch,setopensearch]=useState(false);
    const handleSearchclick=()=>{
        setopensearch(!opensearch);
    }
    const handleClick=()=>{
        reFetch();
    }
    
  return (
    <div className='List'>
      <Navbar/>
      <Header type="list"/>
      <div className='ListItems'>
        <div className='ListContainer'>
            <div className='ListSearch'>
                <h2>Search</h2>
                <div className='SearchDestination'>
                    <span className='Destination'>Destination</span>
                    <input type='text' onChange={(e)=>setDestination(e.target.value)} placeholder={destination}></input>
                </div>
                <div className='SearchDate'>
                    <label>Check-in-date</label>
                    <span onClick={()=>handleSearchclick()} className='Date'>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}
                    </span>
                    {opensearch && <><DateRange
                        editableDateInputs={true}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className='DatepickerSearch'
                        /></>}
                </div>
                <div className='ListOptions'>
                    <span>Options</span>
                    <div className='ListOptionItem'>
                        <span>Min price(per night)</span>
                        <input min={min} onChange={e=>setMin(e.target.value)}  type='number' className='OptionInput'></input>
                    </div>
                    <div className='ListOptionItem'>
                        <span>Max price(per night)</span>
                        <input max={max} onChange={e=>setMax(e.target.value)} type='number' className='OptionInput'></input>
                    </div>
                    <div className='ListOptionItem'>
                        <span>Adult</span>
                        <input min={1}  type='number' className='OptionInput' placeholder={options.adult}></input>
                    </div>
                    <div className='ListOptionItem'>
                        <span>Children</span>
                        <input min={0} type='number' className='OptionInput' placeholder={options.children}></input>
                    </div>
                    <div className='ListOptionItem'>
                        <span>Room</span>
                        <input min={1} type='number' className='OptionInput' placeholder={options.rooms}></input>
                    </div>
                </div>
                <button className='Searchbtn' onClick={handleClick}>Search</button>
            </div>
            <div className='ListResult'> 
                { loading ? "loading" :<>
                    {data.map(item=>(
                        <SearchItem item={item} key={item._id} />
                    ))}
                    </>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
