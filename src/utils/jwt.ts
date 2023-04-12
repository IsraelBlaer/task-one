import jwt from 'jsonwebtoken'
import config from 'config'
import mongoose from 'mongoose';


const PrivateKey = config.get<string>("PrivateKey")
  
export function signJwt({_id,email}:{_id:mongoose.Types.ObjectId,email:string}){
   
   const signOptions:jwt.SignOptions={
    expiresIn:"1h",
    algorithm: "HS256"  
    }
 return jwt.sign({_id: _id, email: email},PrivateKey,signOptions)
}

