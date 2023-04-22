import joi from 'joi'
import UserModel from '../model/user.model';


const userSchema: joi.Schema = joi.object({
  name: joi.string().required(),

  email: joi.string().email().required()
  .external(async (value, helpers,) => {
      const exists = await UserModel.findOne({ email: value })
      if (exists) {
        throw helpers.error("any.custom", { message: "Email already registered" });
      }
      return value;
    })
  ,
  password: joi.string().min(10).required(),
  
  confirmPassword: joi.string()
    .required()
    .valid(joi.ref('password'))
    .messages({ 'any.only': 'Passwords do not match' }),

});


export const userSignInSchema: joi.Schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(10).required()
})


export default userSchema;