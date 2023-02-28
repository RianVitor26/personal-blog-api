import { Request, Response } from 'express';
import { UserModel } from '../models/UsersModel';
import { PostModel } from './../models/PostsModel';

class PostsController {
    public async showAll(req: Request, res: Response) {
    
  }

  public async showOne(req: Request, res: Response) {

  }

  public async create(req: Request, res: Response) {

  }

  public async update(req: Request, res: Response) {
    
  }
 

  public async remove(req: Request, res: Response) {
  
  }
}

export const postsController = new PostsController();
