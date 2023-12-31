const joi = require("joi")

const validator = (req, res, next) => {
    
    const schema = joi.object({
        fullName: joi.string()
            .required(),
        email: joi.string() 
        .email({minDomainSegments:2})
        .required()
        .messages({
            'string.email':'Incorrect email format'
        }),
        password: joi.string() 
            .min(8)
            .max(30)
            .pattern(new RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/))
            .required()
            .messages({
                'string.min': 'The password must have a minimum of 8 characters',
                'string.max': 'The password must have a maximum of 30 characters',
                'string.pattern.base':'The password must contain uppercase, lowercase and numbers'
            }),
        from: joi.string()
            .required(),
        aplication: joi.string()
            .required()


    })
    const validation = schema.validate(req.body.userData, { abortEarly: false })
    if (validation.error) {
        return res.json({
            success: false,
            from: "validador",
            message: validation.error.details
        })
    }
    next()
}
module.exports = validator