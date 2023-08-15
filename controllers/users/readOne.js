import User from "../../models/User.js"

export default async(req,res)=>{
    try{
      let readOneUser = await User.findOne({_id:req.params.user_id}).select("mail photo -_id")
      // let oneUserId = await User.findById(req.params.user_id)
      return res.status(200).json({
        success: true,
        message: "users found",
        response: readOneUser
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: "user not found",
        response: null
      })
    }
  }