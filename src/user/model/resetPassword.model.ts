import { number } from 'joi'
import mongoose from 'mongoose'

export interface IResetPassword extends Document {
 user : mongoose.Types.ObjectId,
 otpCode : number
 expiredDate : Date
}

const resetPasswordSchema =  new mongoose.Schema<IResetPassword>({
    user : {
     type:mongoose.Schema.Types.ObjectId,
     ref : 'User'
    },
    otpCode : Number,
    expiredDate: Date
})
 
 const ResetPasswordModel =  mongoose.model('ResetPassword',resetPasswordSchema)
export default ResetPasswordModel
