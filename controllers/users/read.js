import User from "../../models/User.js"

export default async(req,res,next)=>{
    try{
      let readUser = await User.find().sort({name:1}).limit(6)
      return res.status(200).json({
        success: true,
        message: "users read",
        response: readUser
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: 'not found',
        response: null
    })
  }}