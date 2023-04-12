import jwt from 'jsonwebtoken'
import config from 'config'
import mongoose from 'mongoose';


const PrivateKey = config.get<string>("PrivateKey")
//const PublicKey = config.get<string>("PublicKey")
  
export function signJwt({_id,email}:{_id:mongoose.Types.ObjectId,email:string}){
   
   const signOptions:jwt.SignOptions={
    expiresIn:"1h",
    algorithm: "HS256"  
    }
 return jwt.sign({_id: _id, email: email},PrivateKey,signOptions)
}



// export function verifyJwt(acessToken:string){
// try {
//    const decoded =  jwt.verify(acessToken,PublicKey)
//    if(decoded){
//     return {
//         decoded,
//         valid : true,
//         expired:false
//     }
//    }
// } catch (error:any) {
//     return {
//         decoded : null,
//         valid : ( error.name === "TokenExpiredError"),
//         expired: false
//     }
// }
// }
