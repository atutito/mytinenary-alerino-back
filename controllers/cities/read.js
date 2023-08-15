import City from "../../models/City.js"

export default async(req,res,next)=>{
    try{
      let filtro = {}
      let orden ={}
      if (req.query.admin_id) {filtro.admin_id =req.query.admin_id}
      if(req.query.city){filtro.city=req.query.city}
      if (req.query.admin_id){orden.city = new RegExp(req.query.city,'i')}
      let readCity = await City
      .find(filtro)
      .select('country city photo smalldescription admin_id')
      .populate('admin_id', 'photo name mail')
      .sort(orden)
      return res.status(200).json({
        success: true,
        message: "cities read",
        response: readCity
      })
    }
    catch(err){
      next(err)
      }
  }