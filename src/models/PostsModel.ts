import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true, 
    maxlenght: 100,
    },
  
  author: {
    type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
  },
  category: {
    type: String,
      required: true,
      ref: 'Categories',
  },
  tags: {
    type: [String]
  },
  emphasis: {
    type: Boolean,
    required: false,
  }
});

export const PostModel = mongoose.model('Posts', PostSchema);
