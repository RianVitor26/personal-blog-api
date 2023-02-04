import dotenv from 'dotenv'
dotenv.config()

export const db = {
  uri: process.env.DATABASE_URI
}