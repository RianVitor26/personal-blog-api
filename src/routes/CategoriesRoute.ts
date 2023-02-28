import { Router } from 'express';
import { categoriesController } from '../controllers/categoriesController';

const CategoryRoute: Router = Router();

CategoryRoute.get('', categoriesController.showAll);
CategoryRoute.get('', categoriesController.showOne);
CategoryRoute.post('', categoriesController.create);
CategoryRoute.put('', categoriesController.update);
CategoryRoute.delete('', categoriesController.remove);

export { CategoryRoute };
