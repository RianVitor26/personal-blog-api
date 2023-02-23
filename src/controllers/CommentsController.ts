import { Request, Response } from 'express';
import { CommentModel } from '../models/CommentsModel';
import { UserModel } from '../models/UsersModel';

class CommentsController {
  public async showAll(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const user = await UserModel.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const comments = await CommentModel.findOne({
        user_id: user._id,
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
      const { user_id } = req.params;
      const { author, body } = req.body;
      const user = await UserModel.findById(user_id);

      if (!user_id || !user) {
        return res.status(404).json({ message: 'user not found' });
      }

      await CommentModel.create({ author, body, user_id: user._id });
      return res.status(201).json({ message: 'comment created' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async update(req: Request, res: Response) {}

    public async remove(req: Request, res: Response) {
      try {
         const { user_id, id } = req.params;
         const user = await UserModel.findById(user_id);

         if (!user) {
           return res.status(404).json({ message: 'user not found' });
          }

          const comment = await CommentModel.findOne({
              userID: user_id,
              _id: id
          });

          if (!comment) {
              return res.status(404).json({message: "comment id not found"})
          }
          await CommentModel.remove(comment)
          return res.status(200).json({ message: "comment deleted"})
          
      } catch (error) {
        return res.status(500).json({ error: error });
      }
  }
}

export const commentsController = new CommentsController();
