import City from "../../models/City.js"

export default async(req,res)=>{
    try{
      let newCity = await City.create(req.body)
      return res.status(201).json({
        success: true,
        message: "city created",
        response: newCity.name
      })
    }
    catch(err){
      return res.status(400).json({
        success: false,
        message: "city not created",
        response: null
      })
    }
  }