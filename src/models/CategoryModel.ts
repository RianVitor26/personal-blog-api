import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    ref: 'UserModel',
    required: false,
  },

  description: {
    type: String,
    require: false,
  },
});

export const CategoryModel = mongoose.model('Category', CategorySchema);
