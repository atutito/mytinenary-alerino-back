import joi from "joi";

let registerSchema = joi.object({
    name: joi
    .string()
    .required()
    .min(3)
    .max(20)
    .messages({
        'string.min': "Name must have at least 3 characters please!",
        "string.max": "Name must be less than 21 characters please!",
        "any.required": "Name is required",
        "string.empty": "Name is required"
    }),
    mail: joi
    .string()
    .required()
    .email()
    .messages({
        "any.required": "E-mail is required",
        "string.empty": "E-mail is required"
    }),
    password: joi
    .string()
    .required()
    .min(8)
    .max(20)
    .empty("")
    .messages({
        'string.min': "Password must have at least 8 characters please!",
        "string.max": "Password must be less than 21 characters please!",
        "any.required": "Password is required",
        "string.empty": "Password is required"
    }),
    country: joi
    .string()
    .min(3)
    .max(20)
    .empty("")
    .messages({
        'string.min': "Country must have at least 3 characters please!",
        "string.max": "Country must be less than 21 characters please!",
        "any.required": "Country is required",
        "string.empty": "Country is required"
        })
    .required(),
    lastName: joi
    .string()
    .min(3)
    .max(20)
    .empty("")
    .required()
    .messages({
        'string.min': "Last Name must have at least 3 characters please!",
        "string.max": "Last Name must be less than 21 characters please!",
        "any.required": "Last Name is required",
        "string.empty": "Last Name is required"
    })
})

export default registerSchema