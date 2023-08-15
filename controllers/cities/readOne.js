import City from "../../models/City.js"

export default async(req,res,next)=>{
    try{
      let readOneCity = await City.findOne({_id:req.params.city_id}).select("country photo -_id")
      if(readOneCity){
      return res.status(200).json({
        success: true,
        message: "city found",
        response: readOneCity
      })
    } else {
      return res.status(404).json({
        success:false,
        error:"city not found",
        response:null
      })
    }
    }
    catch(err){
      next(err)
    }
  }