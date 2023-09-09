import joi from "joi";

let registerSchema = joi.object({
    name: joi
    .string()
    .required()
    .min(3)
    .max(20)
    .messages({
        'string.min': "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required",
        "string.empty": "name is required"
    }),
    mail: joi
    .string()
    .required()
    .email()
    .messages({
        "any.required": "e-mail is required",
        "string.empty": "e-mail is required"
    }),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi
    .string()
    .min(3)
    .max(20)
    .empty("")
    .messages({
        'string.min': "last name must have at least 3 characters please!",
        "string.max": "last name must be less than 21 characters please!",
    })
})

export default registerSchema