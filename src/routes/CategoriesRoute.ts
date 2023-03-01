import { Router } from 'express';
import { categoriesController } from '../controllers/categoriesController';

const Categories: Router = Router();

Categories.get('/categories', categoriesController.showAll);
Categories.get('/categories/:id', categoriesController.showOne);
Categories.post('/categories', categoriesController.create);
Categories.put('/categories/:id', categoriesController.update);
Categories.delete('/categories/:id', categoriesController.remove);

export { Categories };
