import Joi from "joi";


const resetPasswordSchema = Joi.object({
  password: Joi.string().min(10).required(),
  otpCode: Joi.number().min(100000).max(999999).required().messages({
    'number.min': 'OTP code must be six digit',
    'number.max': 'OTP code must be six digit'
  })
});


export default resetPasswordSchema