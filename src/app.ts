import express from 'express'
import cors from 'cors'
import { router } from './routes/clientRoute'
import './database/connection'

export class App {
    public server: express.Application 
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes() {
        this.server.use(router)
    }
}