import Itinerary from "../../models/Itinerary.js"

export default async(req,res,next)=>{
    try{
      let {id}= req.params
      let data = req.body
      let updatedItinerary = await Itinerary.findByOneAndUpdate({_id:id}, data,{new:true})
      
      if(updatedItinerary) {
        return res.status(200).json({
          success: true,
          message: "itinerary updated",
          response: updatedItinerary._id
        })
      }
      else {
        return  res.status(404).json({
          success : false ,
          message : "no itinerary found with this id",
          response : null
      })
      }
    }
    catch(err){
      next(err)
    }
  }