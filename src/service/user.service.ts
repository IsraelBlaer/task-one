import UserModel, { IUser } from "../model/user.model";
import { omit } from "lodash";


export  async function createUser(userInput: IUser) {
    try {
        //check if email already exist
      let user = await UserModel.findOne({email:userInput.email})
      //if email exist throw error
      if(user) throw new Error("Email already registered")
      //otherwise create user
         user = await UserModel.create(userInput)
        return omit(user.toJSON(), "password");
    }
    catch(e:any){
        throw new Error(e)
    }
 
}


export async function validateUser({email,password}:{email:string,password:string}){
 const user =  await UserModel.findOne({email:email})
 console.log(user)
 if(!user) return false ;
const isValid =  await user.comparePassword(password)
if(!isValid) return false;
return (omit(user.toJSON(),"password"))
}