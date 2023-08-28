import Itinerary from "../../models/Itinerary.js"

export default async(req,res,next)=>{
    try{
      let newItinerary = req.body
      let one = await await Itinerary.create(newItinerary)
      return res.status(201).json({
        success: true,
        message: "itinerary created",
        response: one._id
      })
    }
    catch(err){
      next(err)
    }
  }