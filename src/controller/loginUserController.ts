import {Request,Response} from 'express'
import { IUser } from '../model/user.model';
import { validateUser} from '../service/user.service';
import { signJwt } from '../utils/jwt';


export async function loginUserHandler(req:Request,res:Response){
    
  const user = await validateUser(req.body)
  
  if(!user) return res.status(400).send("Invalid email or password")
  
  // create acesstoken
  const accessToken = signJwt(user);
  //send acess token
  res.send(accessToken)
     
 }