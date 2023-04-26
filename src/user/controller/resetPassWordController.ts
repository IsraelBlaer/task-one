import { Request, Response } from 'express'
import { resetPassword, sendOTP } from '../service/resetPassword.service'
import { errorHandler } from '../../utils/error';

export async function resetPasswordHandler(req: Request, res: Response) {
    try {
        const { ID } = req.params;

        await resetPassword(req.body, ID);

        res.send('Password reset successfully');
    } catch (error: any) {
        if (error.message === 'not found') {
              errorHandler(res, error, 404, 'user not found');
        } else if (error.message === 'Invalid otp code') {
              errorHandler(res, error, 400, 'Invalid otp code provided');
        } else if (error.message === 'otp code expired') {
             errorHandler(res, error, 400, 'otp code expired');
        } else if (error.message === 'object Id') {
             errorHandler(res, error, 400, 'Invalid user ID provided');
        } else {
             errorHandler(res, error, 500, 'internal server error');
        }
    }
}

export async function sendOTPHandler(req: Request, res: Response) {
    try {
        const { email } = req.params;

        console.log('req.params:', email);

        await sendOTP(email);

        res.send('OTP sent successfully!');
    } catch (error: any) {
        if (error.message === 'not found') {
            return errorHandler(res, error, 404, 'user not found');
        } else {
            return errorHandler(res, error, 500, 'internal server error');
        }
    }
}
