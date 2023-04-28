import express,{Router} from 'express'
import { resetPasswordHandler, sendOTPHandler } from '../controller/resetPassWordController'
import validateReq from '../../middleware/validateRequestBody'
import resetPasswordSchema from '../validators/resetPasswordValidator..schema'

const resetPasswordRoute = Router()

resetPasswordRoute.post('/send-otp/:email',sendOTPHandler)
resetPasswordRoute.post('/:ID',validateReq(resetPasswordSchema), resetPasswordHandler)

export default resetPasswordRoute