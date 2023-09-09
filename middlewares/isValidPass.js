import bcryptjs from 'bcrypt';

export default (req,res,next)=>{
    try {
        let hashPass = bcryptjs.hashSync(req.body.password,10)
        req.body.password =hashPass
        return next()
    } catch (error) {
        return next(error)
    }
}