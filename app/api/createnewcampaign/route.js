import CONNECT_DATABASE from "@/app/config/connection";
import campaignModal from "@/app/modal/campaignModal";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
    // console.log('check req', req);
    await CONNECT_DATABASE();
    try {
        const body = await req.json();
        console.log('chek body', body);
        if (body.name !== '' && body.status !== '' && body.sent !== '', body.replies !== '') {
            const toSave = await campaignModal(body);
            // console.log('tosave check', toSave);
            const saved = await toSave.save();
            // console.log('cehck to save', saved);
            if(saved){
                return NextResponse.json({message:'Campaign Created Successfully',resp:saved},{status:200});
            }
            if(!saved){
                return NextResponse.json({message:'Failed To Create Campaign'},{status:200});
            }
        }


    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }

}