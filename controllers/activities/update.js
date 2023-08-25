import City from "../../models/City.js"

export default async(req,res,next)=>{
    try{
      let updatedCity = await City.findByIdAndUpdate(req.params.u_id, req.body,{new:true}).select('country description')
      return res.status(200).json({
        success: true,
        message: "city updated",
        response: updatedCity
      })
    }
    catch(err){
      next(err)
    }
  }