import express from 'express'
import cors from 'cors'
import { router } from './routes'
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
        this.server.use(router)
    }
}