import mongoose from "mongoose";
import { sendResetPasswordEmail } from "../../utils/email";
import ResetPasswordModel, { IResetPassword } from "../model/resetPassword.model";
import UserModel, { IUser } from "../model/user.model";
import { generateCode } from "../../utils/generateCode";



export async function sendOTP(email: string) {
   console.log(email)
   const user = await UserModel.findOne({ email })
   console.log(user)

   if (!user) throw new Error("not found")

   const otpCode = generateCode();

   const expired = new Date(Date.now() + 300000)

   const resetPassword = {
      user: user._id,
      otpCode: otpCode,
      expiredDate: expired
   }

   try {
      ResetPasswordModel.create(resetPassword)

      await sendResetPasswordEmail(otpCode, user.email, user.name)

      console.log("successfull")

   } catch (error: any) {

      throw new Error(error)

   }

}


export async function resetPassword(
   { otpCode, password }: 
   { otpCode: number, password: string },
   ID: string
) {

   if (!(mongoose.Types.ObjectId.isValid(ID))) throw new Error("object Id")

   const user = await UserModel.findOne({_id: ID })

   if (!user) throw new Error("not found")

   const resetPassword = await ResetPasswordModel.findOne({ otpCode: otpCode, user: user._id })
  
   if (!resetPassword) throw new Error("Invalid otp code")

   if (resetPassword.expiredDate < new Date()) throw new Error("otp code expired")
   
   user.password = password;

   await user.save()

   console.log("new password:", user.password)

   const deletedPaswordModel = await ResetPasswordModel.findOneAndDelete({ user: resetPassword.user })
   
   if (!deletedPaswordModel) return true;

}