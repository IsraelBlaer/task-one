import joi from 'joi'

const userSchema:joi.Schema = joi.object({
 name: joi.string().required(),
 email: joi.string().email().required(),
 password: joi.string().min(10).required(),
 confirmPassword: joi.string()
  .required()
  .valid(joi.ref('password'))
  .messages({ 'any.only': 'Passwords do not match' })
   
})

export const userSignInSchema : joi.Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
   })

export default userSchema;