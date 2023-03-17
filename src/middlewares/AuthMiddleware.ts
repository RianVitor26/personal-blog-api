import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { auth } from '../config/auth';

export class Auth{
  public static async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json('Token was not provided');
    }

    const [, token] = authHeader.split(' ')

    try {
       if (!auth.secret) {
         return res.status(500).json('Authentication secret not set');
      }
      
      const decoded = await jwt.verify(token, auth.secret)

      if (!decoded) {
        return res.status(401).json('Failed to verify token');
      }
      let { id } = req.body
       id  = decoded;
      return next()
      
    } catch (error) {
      return res.status(401).json('Invalid token');
    }
  }
}
