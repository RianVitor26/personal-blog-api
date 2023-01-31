import { Request, Response } from "express";

class TestController {
    index(_req: Request, res: Response) {
        res.status(200).json({message: "Testing Controller"})
    }
}

export const testController = new TestController();
