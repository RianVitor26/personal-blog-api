import { Request, Response } from 'express';
import { CategoriesModel } from './../models/CategoriesModel';

class CategoriesController {
  public async showAll(req: Request, res: Response) {
    try {
      const categories = await CategoriesModel.find();
      if (!categories) return res.status(404).json();
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async showOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json();
      }
      const category = await CategoriesModel.findById(id);
      if (!category) {
        return res.status(404).json();
      }
      return res.status(200).json();
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, description, color } = req.body;

      if (!name) {
        return res.status(422).json();
      }

      const newCategory = await CategoriesModel.create(
        name,
        description,
        color
      );

      if (!newCategory) {
        return res.status(422).json();
      }

      return res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description, color } = req.body;
      if (!id) {
        return res.status(404).json();
      }

      if (!name) {
        return res.status(404).json();
      }
      const category = await CategoriesModel.findById(id);
      if (!category) {
        return res.status(404).json();
      }
      const upadatedCategory = await category.updateOne(
        name,
        description,
        color
      );
      if (!upadatedCategory) {
        return res.status(422).json();
      }

      return res.status(200).json(upadatedCategory);
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
      console.log(error);
    }
  }

  public async remove(req: Request, res: Response) {
       try {
         const { id } = req.params;
         const category = await CategoriesModel.findById(id);
         if (!category) {
           return res
             .status(404)
             .json({ message: 'category not found' });
         }
         await category.delete();
         return res.status(200).json({ message: 'category deleted' });
       } catch (err) {
         res.status(500).json({ message: 'internal server error' });
         console.log(err);
       }
  }
}

export const categoriesController = new CategoriesController();
