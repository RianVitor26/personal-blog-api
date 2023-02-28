import { Router } from 'express';
import { commentsController } from '../controllers/CommentsController';

const CommentsRoute: Router = Router();

CommentsRoute.get('/users/:user_id/comments', commentsController.showAll);
CommentsRoute.get('/users/:user_id/comments/:id', commentsController.showOne);
CommentsRoute.post('/users/:user_id/comments', commentsController.create);
CommentsRoute.put('/users/:user_id/comments/:comment_id', commentsController.update);
CommentsRoute.delete('/users/:user_id/comments/:comment_id', commentsController.remove);

export { CommentsRoute }