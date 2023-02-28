import mongoose from 'mongoose';

const commentModel = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  data: {
    type: Number,
    default: Date.now(),
  },
  body: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  photo: {
    type: String,
    required: false,
  }
});

export const CommentModel = mongoose.model('Comments', commentModel);
