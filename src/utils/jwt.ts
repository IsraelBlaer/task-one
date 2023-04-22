import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

const PrivateKey = process.env.PRIVATE_KEY || "" 

export function signJwt({_id,email}:{_id:mongoose.Types.ObjectId,email:string}){
   
   const signOptions:jwt.SignOptions={
    expiresIn:"15m",
    algorithm: "HS256"  
    }
    
 return jwt.sign({_id: _id, email: email},PrivateKey,signOptions)
}


