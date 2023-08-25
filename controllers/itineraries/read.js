import Itinerary from "../../models/Itinerary.js"

export default async (req,res,next) => {
    try {
        let filtro = {}
        let orden = {}
        if (req.query.name) {filtro.name = req.query.name}
        if (req.query.name) {filtro.name = new RegExp(req.query.name,'i')}
        if (req.query.sort) {orden.name = req.query.sort}
        let readItineraries = await Itinerary
            .find(filtro,'city_id price photo duration')
            .populate('city_id','photo name tags')
            .sort(orden)
        if (readItineraries.length>0) {
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: readItineraries
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'no itineraries found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}