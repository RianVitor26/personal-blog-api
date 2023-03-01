import { Request, Response } from 'express';
import { PostModel } from './../models/PostsModel';
import { CommentModel } from '../models/CommentsModel';
import { CategoriesModel } from './../models/CategoriesModel';


class CategoriesController {
  public async showAll(req: Request, res: Response) {
    try {
      const categories = await CategoriesModel.find()
      if (!categories) return res.status(404).json() 
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async showOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json()
      }
      const category = await CategoriesModel.findById(id)
      if (!category) {
        return res.status(404).json()
      } 
      return res.status(200).json()
      
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async create(req: Request, res: Response) {
    
  }

  public async update(req: Request, res: Response) {
    
  }

  public async remove(req: Request, res: Response) {
    
  }
}

export const categoriesController = new CategoriesController();
