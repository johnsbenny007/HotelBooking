import User from '../models/users.js';
import handler from '../utils/errorhandler.js';

//Update
export const updateUser=async(req,res)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
//Delete
export const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(500).send("Delete successful");
    } catch (error) {
        next(error);
    }
}
//getUser
export const getUser=async(req,res,next)=>{
    try {
       const GetUser=await User.findById(req.params.id);
       res.status(500).json(GetUser);
    } catch (error) {
       next(handler(404,"Sorry not found")) ;
    }
}
//getUsers
export const getUsers=async(req,res,next)=>{
    const GetUsers=await User.find();
    try {
        res.status(200).json(GetUsers);
        next();
    } catch (error) {
        next(error);
    }
}