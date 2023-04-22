import { Request, Response } from 'express'

export const errorHandler = (res: Response, error: Error, code: number, message: string) => {
    return res.status(code).json({ status: 'failed', error: message });
};
