import express,{Router} from 'express'
import userSchema,{userSignInSchema} from '../schema/user.schema'
import { createUserHandler, loginUserHandler} from '../controller/createUserController'
import validateReq from '../../middleware/validateRequestBody'

const userRoute = Router()

userRoute.post('/signUp',validateReq(userSchema), createUserHandler)
userRoute.post('/signIn',validateReq(userSignInSchema), loginUserHandler)

export default userRoute
