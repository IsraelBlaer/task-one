import express,{Router} from 'express'
import userSchema,{userSignInSchema} from '../validators/userValidator.Schema'
import { createUserHandler, loginUserHandler} from '../controller/createUserController'
import validateReq from '../../middleware/validateRequestBody'

const userRoute = Router()

userRoute.post('/signUp',validateReq(userSchema), createUserHandler)
userRoute.post('/signIn',validateReq(userSignInSchema), loginUserHandler)

export default userRoute
