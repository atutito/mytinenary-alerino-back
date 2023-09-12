import Activity from "../../models/Activity.js"

export default async (req,res,next) => {
    try {
        let queries = {}
        if (req.query.itinerary_id) {queries.itinerary_id = req.query.itinerary_id}
        let readActivities = await Activity
            .find(queries,'-__v -createdAt -updatedAt')
            .populate({path:'itinerary_id', select:"name photo city_id"} )
            if (readActivities.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'activities found',
                    response: readActivities
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'activities not found',
                    response: null
            
            /* return res.status(200).json({
                success: true,
                message: 'activities found',
                response: readActivities */
            /* }) */
            
    })}} catch (error) {
            next(error)
    }
}