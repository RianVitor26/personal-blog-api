import dotenv from 'dotenv'
dotenv.config()
export const auth =  {
    secret: process.env.APP_SECRET,
    expireIn: '7d'
}