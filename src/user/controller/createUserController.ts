import { Request, Response } from 'express'
import { IUser } from '../model/user.model';
import { createUser } from '../service/user.service';
import { validateUser } from '../service/user.service';
import { signJwt } from '../../utils/jwt';
import { sendWelcomeEmail } from '../../utils/email';

export async function createUserHandler(req: Request<{}, {}, IUser>, res: Response) {
    try {
        const user = await createUser(req.body)
        if(user){
            sendWelcomeEmail(user.email,user.name)
        }
        res.json({
            "status" : "success",
            "message" : "Registration Successful"
        })
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }

}

export async function loginUserHandler(req: Request, res: Response) {
    try {
        const user = await validateUser(req.body)
        // create acesstoken
        const accessToken = signJwt(user);
        //send acess token
        res.json({
            "id": user._id,
            "name": user.name,
            "email": user.email,
            "userAccessToken": accessToken
        })
        
    } catch (error: any) {
        console.log("error:" + error.message)
        res.send(error.message)
    }

}
