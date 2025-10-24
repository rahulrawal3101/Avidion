import CONNECT_DATABASE from "@/app/config/connection";
import campaignModal from "@/app/modal/campaignModal";
import { NextResponse } from "next/server";

export const GET = async(req)=>{
    await CONNECT_DATABASE();
    try{
     const body = await campaignModal.find();
     console.log('check body' , body);
     if(body !== null){
        return NextResponse.json({message:'Data Fetch Successfully',resp:body},{status:200});
     }
     if(body == null){
        return NextResponse.json({message:'Failed To Fetch Data'},{status:200});
     }
    }catch(eer){
        console.log(err);
    }


}