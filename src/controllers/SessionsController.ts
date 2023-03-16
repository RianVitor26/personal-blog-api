import { UserModel } from "../models/UsersModel";
import { comparePassword } from "../utils/auth";
import { auth } from "../config/auth";
import jwt from 'jsonwebtoken'
import { Request, Response } from "express";
export class SessionsController {
    public static async create(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            
            if (!email) {
                return res.status(401).json()
            }
            const user = await UserModel.findOne({ email: email })

            if (!user) {
                return res.status(404).json()
            }

            const { id } = user

            if (!auth.secret) {
                return res.status(401).json()
            }

            return res.json({
                user: {
                    id,
                    email
                },
                token: jwt.sign({ id }, auth.secret, {
                    expiresIn: auth.expireIn
                })
            })

        } catch (error) {
            return res.status(401).json({message: 'Failed to create session'})
        }
    }
}