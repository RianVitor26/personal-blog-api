import express from 'express'
import cors from 'cors'
import { UsersRoute } from './routes/UsersRoute'
import { CommentsRoute } from './routes/CommentsRoute'
import { PostsRoute } from './routes/PostsRoute'
import { Categories } from './routes/CategoriesRoute'
import './database'

export class App {
    public server: express.Application 
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.server.use(express.json())
        this.server.use(cors())
    }

    public routes() {
        this.server.use(UsersRoute, CommentsRoute, PostsRoute, Categories);
    }
}