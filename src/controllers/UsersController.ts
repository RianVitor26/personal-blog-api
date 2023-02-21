import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';

class UsersController {
  public async showAll(req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async showOne(req: Request, res: Response) {
    try {
      res.status(200).json({ message: 'Show one user' });
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async create(req: Request, res: Response) {
    
    try {
      const { name, email, password } = req.body;
      const userEmail = await UserModel.findOne({email});
      if (userEmail) {
        return res.status(402).json({ message: 'Email already exists' });
      }
      const newUser = await UserModel.create({ name, email, password });
      return res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }
  public update(req: Request, res: Response) {
    try {
      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public destroy(req: Request, res: Response) {
    try {
      res.status(200).json({ message: 'User destroyed successfully' });
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }
}

export const usersController = new UsersController();
