import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
    },
  
  author: {
    type: String,
      required: true,
      ref: 'UserModel',
  },
  category: {
    type: String,
      required: true,
      ref: 'CategoryModel',
    },
});

export const PostModel = mongoose.model('Posts', PostSchema);
