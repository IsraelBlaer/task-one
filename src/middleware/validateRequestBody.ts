import {Request,Response,NextFunction} from 'express'
import joi from 'joi'



const validateReq = (userSchema:joi.Schema)=>(req:Request, res:Response,next:NextFunction)=>{
  
  const {error} =  userSchema.validate(req.body);
   
  if(error) return res.status(400).send(error.details[0].message);
  
  next()
}

export default validateReq