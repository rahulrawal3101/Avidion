import mongoose from "mongoose";
import newCampaign from "../schema/newCampaign";

const campaignModal = mongoose.models.campaignModal|| new mongoose.model('campaignModal',newCampaign);

export default campaignModal;