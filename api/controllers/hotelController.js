import Hotel from '../models/hotel.js';
import Room from '../models/rooms.js'
import handler from '../utils/errorhandler.js';

//Create
export const createHotel=async (req,res,next)=>{
    const newHotel= new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error)
    }
}
//Update
export const updateHotel=async(req,res)=>{
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);
    }
}
//Delete
export const deleteHotel=async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(500).send("Delete successful");
    } catch (error) {
        next(error);
    }
}
//getHotel
export const getHotel=async(req,res,next)=>{
    try {
       const GetHotel=await Hotel.findById(req.params.id);
       res.status(201).json(GetHotel);
    } catch (error) {
       next(handler(404,"Sorry not found")) ;
    }
}
//get Hotels
export const getHotels_=async(req,res,next)=>{
    try {
       const GetHotel=await Hotel.find();
       res.status(500).json(GetHotel);
    } catch (error) {
       next(handler(404,"Sorry not found")) ;
    }
}
//getHotels with featured value
export const getHotels=async(req,res,next)=>{
    const {Rating,...others}=req.query;
    try {
        const GetHotels=await Hotel.find({...others,rating:{$gt:Rating}})
        res.status(201.).json(GetHotels);
        next();
    } catch (error) {
        next(error);
    }
}
//count by type
export const countbycity=async(req,res,next)=>{
    const cities=req.query.cities.split(',');
    try {
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(201).json(list);
    } catch (error) {
        next(error)
    }
}
//select by city
export const selectbycity=async(req,res,next)=>{
    const {max,min,...otherdetails}=req.query;
    try{
        const data=await Hotel.find({...otherdetails,cheapestPrice:{$lt:max,$gt:min}});
        res.status(201).json(data);
    }
    catch (error){
        next(error)
    }
}
//Get hotel Rooms

export const  getHotelRooms=async(req,res,next)=>{
    const id=req.params.hotelid;
    try {
        const hotelname=await Hotel.findById(id);
        const list =await Promise.all(hotelname.rooms.map((item)=>
        {return Room.findById(item)}  
        ))
        res.status(201).json(list);
    } catch (error) {
        next(error);
    }
}