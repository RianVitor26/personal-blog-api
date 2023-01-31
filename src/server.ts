import { App } from './app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3002
const app = new App().server

app.listen(PORT, () => {
    console.info(`Listening on http://localhost:${PORT}`)
})