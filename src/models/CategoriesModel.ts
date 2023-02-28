import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
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

export const CategoriesModel = mongoose.model('Category', CategoriesSchema);
