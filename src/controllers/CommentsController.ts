import { Request, Response } from 'express';
import { CommentModel } from '../models/CommentsModel';
import { createPasswordHash } from '../utils/auth';

class CommentsController {
  public async showAll(req: Request, res: Response) {
    try {
      const users = await CommentModel.find();
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async showOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await CommentModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const userEmail = await CommentModel.findOne({ email });
      if (userEmail) {
        return res.status(402).json({ message: 'Email already exists' });
      }

      const encryptedPassword = await createPasswordHash(password);

      const newUser = await CommentModel.create({
        name,
        email,
        password: encryptedPassword,
      });

      return res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await CommentModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await user.updateOne({ name, email, password });
      return res.status(200);
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await CommentModel.findById(id);
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User not found or user has been deleted' });
      }
      await user.delete();
      return res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: 'internal server error' });
      console.log(err);
    }
  }
}

export const commentsController = new CommentsController();
