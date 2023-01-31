import { Request, Response } from "express";

class UsersController {
  public index(_req: Request, res: Response) {
    try {
      res.status(200).json({ message: "Initial page"})
    }
    catch (err) {
      res.status(500).json({ message: "error on server response" })
      console.log(err)
    }
  }


  public async showAll(_req: Request, res: Response) {
    try {
      res.status(200).json({ message: "Show all users"})
    }
    catch (err) {
       res.status(500).json({ message: "error on server response" });
       console.log(err);
    }
  }

  public async showOne(_req: Request, res: Response) {
    try {
      res.status(200).json({ message: "Show one user"})
    }
    catch (err) {
       res.status(500).json({ message: "error on server response" });
       console.log(err);
    }
  }

  public create(_req: Request, res: Response) {
    try {
        res.status(201).json({message: "User created successfully"})
    }
    catch (err) {
       res.status(500).json({ message: "error on server response" });
       console.log(err);
    }
  }
  public update(_req: Request, res: Response) {
    try {
        res.status(200).json({message: "User updated successfully"})
    }
    catch (err) {
       res.status(500).json({ message: "error on server response" });
       console.log(err);
    }
  }

  public destroy(_req: Request, res: Response) {
    try {
        res.status(200).json({message: "User destroyed successfully"})
    }
    catch (err) {
       res.status(500).json({ message: "error on server response" });
       console.log(err);
    }
  }
}

export const usersController = new UsersController();
