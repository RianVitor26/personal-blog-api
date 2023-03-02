import { Request, Response } from 'express';
import { UserModel } from '../models/UsersModel';
import { PostModel } from './../models/PostsModel';
import { CategoriesModel } from './../models/CategoriesModel';

class PostsController{
  public async showAll(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const user = await UserModel.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const posts = await PostModel.findOne({
        userID: user._id,
      });

      if (!posts) {
        return res.status(404).json({ message: 'Posts not found' });
      }
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async showOne(req: Request, res: Response) {
    try {
      const { user_id, post_id } = req.params;

      if (!user_id || !post_id) {
        return res
          .status(404)
          .json({ message: 'user id or comment id not found' });
      }

      const user = await UserModel.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const post = await PostModel.findOne({
        _id: post_id,
        userID: user._id,
      });

      if (!post) {
        return res.status(404).json({ message: 'post id not found' });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { user_id, category_id } = req.params;
      const { title, content, emphasis } = req.body;
      const user = await UserModel.findById(user_id);
      const category = await CategoriesModel.findById(category_id);

      if (!category) {
        return res.status(404).json()
      }

      if (!user_id || !user) {
        return res.status(404).json({ message: 'user not found' });
      }

      await PostModel.create({
        title,
        content,
        emphasis,
        author: user.name,
        category: category.name
      });
      return res.status(201).json({ message: 'post created' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { user_id, post_id, category_id } = req.params;
      const { title, content, emphasis } = req.body;
      const user = await UserModel.findById(user_id);
      const category = await CategoriesModel.findById(category_id);

      if (!category) {
        return res.status(404).json()
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (!post_id || !category_id) {
        return res.status(404).json()
      }

      if (!title || !content) {
        return res.status(422).json()
      }

      const post = await PostModel.findOne({
        _id: post_id,
        author: user._id,
        category: category_id,
      });

      if (!post) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      await PostModel.updateOne({
        id: post_id,
        title: title,
        author: user._id,
        content: content,
        emphasis: emphasis,
        category: category.name
      });

      return res.status(200).json({ message: 'Comment updated' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const { user_id, post_id, category_id} = req.params;
      const user = await UserModel.findById(user_id);
      const category = await CategoriesModel.findById(category_id);

      if (!category) {
        return res.status(404).json()
      }

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      const post = await PostModel.findOne({
        id: post_id,
        author: user._id,
        category: category.name
      });

      if (!post) {
        return res.status(404).json({ message: 'post id not found' });
      }
      await PostModel.remove(post);
      return res.status(200).json({ message: 'post deleted' });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

export const postsController = new PostsController();
