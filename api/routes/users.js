import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';
import  { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router=express.Router();

// //CheckAuthentication
// router.get("/Checkauth",verify,(req,res,next)=>{
//     res.status(500).send("You are authenticated");
// });
// //checkUser to delete
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.status(500).send("your are authenticated user and you can delete");
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.status(500).send("Your are authenticated and delete all accounts")
// })
//Update
router.put("/:id",verifyUser,updateUser,)
//Delete
router.delete("/:id",verifyUser,deleteUser)
//get hotel
router.get('/:id',verifyUser,getUser);
//get hotels
router.get('/',verifyAdmin,getUsers)


export default router;
