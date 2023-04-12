import {Request,Response} from 'express'
import { IUser } from '../model/user.model';
import {createUser} from '../service/user.service';


export async function createUserHandler(req:Request<{},{},IUser>,res:Response){

    try {
        const user = await createUser(req.body)
        res.send(user)
    } catch (error:any) {
        res.status(409).send(error.message)
    }
    
}
