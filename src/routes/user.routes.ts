import express,{Router} from 'express'
import validateReq from '../middleware/validateRequestBody'
import userSchema,{userSignInSchema} from '../schema/user.schema'
import { createUserHandler} from '../controller/createUserController'
import { loginUserHandler } from '../controller/loginUserController'
const userRoute = Router()

userRoute.post('/signUp',validateReq(userSchema), createUserHandler)
userRoute.post('/signIn',validateReq(userSignInSchema), loginUserHandler)

export default userRoute
