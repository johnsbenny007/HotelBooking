import express from 'express';
import jwt from 'jsonwebtoken';
import handler from './errorhandler.js';

const verify=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(handler(401,"You are not authenticated!"));
    }
    jwt.verify(token,"isidisid",(err,user)=>{
        if(err){
            return next(handler(401,"Token is not valid"));
        }
        req.user=user;
        next();
    })
}
export const verifyUser=(req,res,next)=>{
    verify(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(handler(401,"You are not authorized"))
        }
    })
}
export const verifyAdmin=(req,res,next)=>{
    verify(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            return next(handler(401,"You are not admin"));
        }
    })
}


export default verify;