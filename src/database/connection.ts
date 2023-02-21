import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

mongoose
  .connect(
    `${process.env.DB_URI}`
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });