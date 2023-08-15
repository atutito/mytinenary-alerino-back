import User from "../../models/User.js"

export default async(req,res,next)=>{
    try{
      let readUser = await User.find()
      return res.status(200).json({
        success: true,
        message: "users read",
        response: readUser
      })
    }
    catch(err){
      next(err)
    }
  }