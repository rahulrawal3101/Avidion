
import { MONGO_URL } from "@/constant";
import mongoose from "mongoose";


let connection;

const CONNECT_DATABASE =async ()=>{
    console.log('Connect Database Successfully');
   if(!connection){
      connection = await mongoose.connect(MONGO_URL);
   };
    return connection;
   
};
export default CONNECT_DATABASE;