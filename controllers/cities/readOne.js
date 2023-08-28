import City from "../../models/City.js"

export default async(req,res,next)=>{
    try{
      let readOneCity = await City.findById({_id:req.params.city_id}).select("city country photo smalldescription -_id")
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