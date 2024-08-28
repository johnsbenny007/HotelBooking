import express from 'express';
import { countbycity, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, getHotels_, selectbycity, updateHotel } from '../controllers/hotelController.js';
import  { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router=express.Router();


//create
router.post('/',verifyAdmin,createHotel,)
//Update
router.put("/:id",verifyAdmin,updateHotel)
//Delete
router.delete("/:id",verifyAdmin,deleteHotel)
//get hotel
router.get('/find/:id',getHotel);
//get hotels
router.get('/',getHotels_)
//get by type
router.get('/countbycity',countbycity)
//get by city
router.get('/selectbycity',selectbycity);
//get hotelrooms
router.get('/room/:hotelid',getHotelRooms);
export default router;