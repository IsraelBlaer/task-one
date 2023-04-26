import mongoose, { Mongoose } from "mongoose";
import bcrypt from 'bcrypt'



export interface IUser extends mongoose.Document {
  name: string,
  
  password:string,

  email:string,

 comparePassword(password:string):Promise<Boolean>
}


const userSchema =  new mongoose.Schema<IUser>({
    name : String,
    email : String,
    password :String
},{timestamps:true})


userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
       return next();
    }
      
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword;
    next();
  
 })
 
 userSchema.methods.comparePassword = async function (inputPassword: string): Promise<Boolean> {
     const isValid =  await bcrypt.compare(inputPassword, this.password );
     return isValid
 }



 const UserModel = mongoose.model('Users',userSchema)

export default UserModel;