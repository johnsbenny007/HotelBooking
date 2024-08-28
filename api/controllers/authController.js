import User from "../models/users.js"
import bcrypt from 'bcryptjs';
import handler from "../utils/errorhandler.js";
import jwt from 'jsonwebtoken';
//Create
export const Register=async (req,res,next)=>{
    
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User(
            {
                username:req.body.username,
                email:req.body.email,
                password:hash,
            });
            await newUser.save();
            res.status(201).json("user has been created");
    } 
        
    catch (error) {
        next(error);
    }
}
//Login
export const Login=async (req,res,next)=>{
    
    try {
        const user=await User.findOne({username:req.body.username});
        if(!user)return next(handler(404,"User not found"));
        const isPasssordCorrect=await bcrypt.compare(req.body.password,user.password);
        if(!isPasssordCorrect)return next(handler(403,"Wrong password or username"));
        const {password,isAdmin,...otherDetails}=user._doc;

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},"isidisid");
        res.cookie("access_token",token,{
           httpOnly:true,
        }).status(201).json(otherDetails);
    } 
    catch (error) {
        next(error);
    }
}