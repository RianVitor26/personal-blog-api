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

  public async showOne(req: Request, res: Response) {
    try {
      const { user_id, comment_id } = req.params

      if (!user_id || !comment_id) {
        return res
          .status(404)
          .json({ message: 'user id or comment id not found' });
      }

      const user = await UserModel.findById(user_id)

      if (!user) {
        return res
          .status(404)
          .json({ message: 'user not found' });
      }

      const comment = await CommentModel.findOne({
        _id: comment_id,
        userID: user._id,
      });

      if (!comment) {
        return res
          .status(404)
          .json({ message: 'comment id not found' });
      }

      return res.status(200).json(comment)

    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const { author, body, photo } = req.body;
      const user = await UserModel.findById(user_id);

      if (!user_id || !user) {
        return res.status(404).json({ message: 'user not found' });
      }

      await CommentModel.create({ author, body, userID: user._id, photo: photo });
      return res.status(201).json({ message: 'comment created' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { user_id, comment_id } = req.params;
      const { author, body, photo } = req.body;
      const user = await UserModel.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const comment = await CommentModel.findOne({
        _id: comment_id,
        userID: user._id,
      });

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      await CommentModel.updateOne(
        { _id: comment_id, userID: user_id },
        { author, body, photo }
      );

      return res.status(200).json({ message: 'Comment updated' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const { user_id, id } = req.params;
      const user = await UserModel.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const comment = await CommentModel.findOne({
        userID: user_id,
        _id: id,
      });

      if (!comment) {
        return res.status(404).json({ message: 'comment id not found' });
      }
      await CommentModel.remove(comment);
      return res.status(200).json({ message: 'comment deleted' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

export const commentsController = new CommentsController();
