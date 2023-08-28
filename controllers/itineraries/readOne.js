import Itinerary from "../../models/Itinerary.js"

export default async(req,res,next)=>{
    try{
      let readOneItinerary = await Itinerary.findById({id:req.params._id}).select("city_id name photo")
      if(readOneItinerary){
      return res.status(200).json({
        success: true,
        message: "itinerary found",
        response: readOneItinerary
      })
    } else {
      return res.status(404).json({
        success:false,
        error:"itinerary not found",
        response:null
      })
    }
    }
    catch(err){
      next(err)
    }
  }