import dotenv from 'dotenv'
dotenv.config()

export const db = {
  uri: process.env.DB_URI
}