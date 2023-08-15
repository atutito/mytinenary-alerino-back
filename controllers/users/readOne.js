import User from "../../models/User.js"

export default async(req,res,next)=>{
    try{

      let readOneUser = await User.findOne({_id:req.params.user_id}).select("mail photo -_id")
      if(readOneUser){
        return res.status(200).json({
          success: true,
          message: "users found",
          response: readOneUser
        })
    } else {
      return res.status(400).json({
        success: false,
        message: "user not found",
        response: null
      })
    }
      
    }
    catch(err){
      next(err)
    }
  }