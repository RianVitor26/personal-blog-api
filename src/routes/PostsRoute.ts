import { Router } from 'express';
import { postsController } from './../controllers/PostsController';

const PostsRoute: Router = Router();

PostsRoute.get('/users/:user_id/posts', postsController.showAll)
PostsRoute.get('/users/:user_id/posts/:post_id', postsController.showOne)
PostsRoute.post('/users/:user_id/posts', postsController.create)
PostsRoute.put('/users/:user_id/posts/:post_id', postsController.update);
PostsRoute.delete('/users/:user_id/posts/:post_id', postsController.remove);

export { PostsRoute };
