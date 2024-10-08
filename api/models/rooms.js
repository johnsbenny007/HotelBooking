import mongoose, { MongooseError } from "mongoose";

const RoomSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    maxpeople:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    roomNumbers:[{number:Number,unavailbaleDates:{type:[Date]}}],
},
{timestamps:true}
);

export default mongoose.model('Room',RoomSchema);