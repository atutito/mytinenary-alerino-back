import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPass from "../middlewares/isValidPass.js";

let auth_router = Router()
auth_router.post('/register',validator(registerSchema),existsUser,isValidPass,register)
//auth_router.post('/register',register)
export default auth_router