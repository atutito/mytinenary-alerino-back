import User from "../../models/User.js"

export default async(req,res)=>{
    try{
      let readUser = await User.find()
      return res.status(200).json({
        success: true,
        message: "users read",
        response: readUser
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: "user not read",
        response: null
      })
    }
  }