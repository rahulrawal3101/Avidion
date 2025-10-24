import mongoose from "mongoose";

const newCampaign = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        required:true,
        enum:['Active', 'Paused','Meeting Booked'],
    },
    sent:{
        type:Number,
        required:true,
    },
    replies:{
        type:Number,
        required:true,
    }

},{timestamps:true});

export default newCampaign;