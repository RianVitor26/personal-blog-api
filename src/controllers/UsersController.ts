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
      const { id } = req.params;
      const user = await UserModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
       return res.status(200).json(user)
      
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const userEmail = await UserModel.findOne({ email });
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

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, email, password } = req.body
      const user = await UserModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await user.updateOne({name, email, password})
      return res.status(200)
    
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }
 

  public destroy(req: Request, res: Response) {
    try {
     
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }
}

export const usersController = new UsersController();
