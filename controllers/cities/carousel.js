import City from '../../models/City.js'

export default async (req,res,next)=>{
    try {
        let todas = await City.find({},'photo city').sort({fundation:'desc'}).limit(12)
        let contar = await City.countDocuments()
        return res.status(200).json({
            success: true,
            message: 'cities ready to be show on carousel',
            data_carousel: todas,
            contar
        })
    } catch (err) {
        next(err)
    }
}