import Hotel from '../models/hotel.js';
import rooms from '../models/rooms.js';
import Room from '../models/rooms.js';
//Create Room
export const createRoom=async(req,res,next)=>{
        const hotelid=req.params.id;
        const room= new Room(req.body);
    try {
        const savedRoom=await room.save();
        try {
           await Hotel.findByIdAndUpdate(hotelid,{$push:{rooms:savedRoom._id},
           })
        } catch (error) {
            next(error)
        }
        res.status(201).json(savedRoom);
    } catch (error) {
        next(error);
    }
}
//Upadate Room
export const updateRoom=async(req,res,next)=>{
    const roomid=req.params.roomid
    try {
        const updatedRoom=await Room.findByIdAndUpdate(roomid,{$set:req.body},{new:true});
        res.status(201).json(updatedRoom);
    } catch (error) {
        next(error);
    }
}
//Delete Room
export const deleteRoom=async(req,res,next)=>{
    const roomid=req.params.roomid
    const hotelid=req.params.id;
    try {
       await Room.findByIdAndDelete(roomid);
       await Hotel.findByIdAndUpdate(hotelid,{$pull:{rooms:roomid}})
       res.status(201).send("Room has been deleted");
    } catch (error) {
        next(error)
    }
}
//Get Room
export const getRoom=async(req,res,next)=>{
    const roomid=req.params.roomid
    try {
        const GetRoom=await Room.findById(roomid);
        res.status(201).json(GetRoom);
    } catch (error) {
        next(error)
    }
}
//Get Rooms
export const getRooms=async(req,res,next)=>{
    try {
        const GetRoom=await Room.find();
        res.status(201).json(GetRoom);
    } catch (error) {
        next(error)
    }
}
//update unavailabledates
export const updateRoomDate=async(req,res,next)=>{
    const roomid=req.params.id;
    const unavailabledates=req.body.dates
    try {
       await Room.updateOne({"roomNumbers._id":roomid},{$push:{"roomNumbers.$.unavailbaleDates":unavailabledates}})
       res.status(201).json("room updated");
    } catch (error) {
        next(error);
    }
}