import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticate = false

  if (isAuthenticate) {
    return next();
  } else {
 
    return res.status(401).json({ message: 'not authenticated' });
  }
}
