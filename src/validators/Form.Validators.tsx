import Joi from "joi";

const FormValidators = Joi.object({
    brand: Joi.string().min(3).required().messages({
        'string.pattern.base': 'Brand must be a string with at least 2 characters'
    }),
    price: Joi.number().min(1000).max(200000).required().messages({
        'number.min': 'Price must be at least 1000',
        'number.max': 'Price must be at most 200000'
    }),
    year: Joi.number().min(2000).max(2026).required().messages({
        'number.min': 'Year must be at least 2000',
        'number.max': 'Year must be at most 2026'
    })
});



export default FormValidators;