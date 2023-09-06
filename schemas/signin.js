import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(30).messages({
        'string.min': "mail must have at least 8 characters please!",
        "string.max": "mail must be less than 31 characters please!",
        "any.required": "mail is required",
        "string.empty": "mail is required"
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please!",
        "string.max": "password must be less than 21 characters please!",
        "any.required": "password is required",
        "string.empty": "password is required"
    }),
})

export default signinSchema