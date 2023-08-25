import City from "../../models/City.js";

export default async (req,res,next) => {
    try {
        let filtro = {}
        let orden = {}
        if (req.query.admin_id) {filtro.admin_id = req.query.admin_id}
        if (req.query.city) {filtro.city = new RegExp(req.query.city,'i')}
        if (req.query.sort) {orden.city = req.query.sort}
        let readCities = await City
            .find(filtro,'country city photo smalldescription admin_id')
            .populate('admin_id','photo name mail -_id')
            .sort(orden)
        if (readCities.length>0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: readCities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'no cities found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}