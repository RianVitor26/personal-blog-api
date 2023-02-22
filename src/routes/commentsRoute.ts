import { Router } from 'express';
import { commentsController } from '../controllers/CommentsController';

const router: Router = Router();

router.get('/users/:id/comments', commentsController.showAll);
router.post('/users/:id/comments', commentsController.create);
router.put('/users/:id/comments/:id', commentsController.update);
router.delete('/users/:id/comments/:id', commentsController.remove);

export { router };
