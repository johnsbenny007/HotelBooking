import express from 'express'
import {Login, Register } from '../controllers/authController.js';

const router=express.Router();
//Create
router.post('/register',Register)

//Login
router.post('/login',Login);


export default router;