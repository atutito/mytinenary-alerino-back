import City from "../../models/City.js"

export default async(req,res)=>{
    try{
      let readCity = await City.find()
      return res.status(200).json({
        success: true,
        message: "cities read",
        response: readCity
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: "city not read",
        response: null
      })
    }
  }