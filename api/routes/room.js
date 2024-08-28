import express from 'express'
import  { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomDate } from '../controllers/roomController.js';
const router=express.Router();

//Create
router.post('/:id',verifyAdmin,createRoom);
//Delete
router.delete('/:id/:roomid',verifyAdmin,deleteRoom);
//Update
router.put('/:roomid',verifyAdmin,updateRoom);
//GetRoom
router.get('/:roomid',getRoom);
//GetRooms
router.get('/',getRooms)
export default router;
//updatebydate
router.put('/availibility/:id',updateRoomDate);