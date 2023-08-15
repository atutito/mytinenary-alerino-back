import City from "../../models/City.js"

export default async(req,res)=>{
    try{
      let readOneCity = await City.findOne({_id:req.params.city_id}).select("country photo -_id")
      // let oneUserId = await User.findById(req.params.user_id)
      return res.status(200).json({
        success: true,
        message: "city found",
        response: readOneCity
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: "city not found",
        response: null
      })
    }
  }