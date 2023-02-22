import { Request, Response } from 'express';
import { CommentModel } from '../models/CommentsModel';
import { UserModel } from '../models/UsersModel';

class CommentsController {
  public async showAll(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const comments = await CommentModel.findOne({
        userID: user._id,
      });

      if (!comments) {
        return res.status(404).json({ message: 'Comments not found' });
      }
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async showOne(req: Request, res: Response) {}

  public async create(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { author, body } = req.body;
      const user = await UserModel.findById(id);

      if (!id || !user) {
        return res.status(404).json({ message: 'user not found' });
      }

      await CommentModel.create({ author, body, userID: user._id });
      return res.status(201).json({ message: 'comment created' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async update(req: Request, res: Response) {}

  public async remove(req: Request, res: Response) {}
}

export const commentsController = new CommentsController();
