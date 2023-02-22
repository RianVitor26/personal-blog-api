import { Router } from 'express'
import { commentsController } from '../controllers/CommentsController'
import { usersController } from '../controllers/UsersController' 

const router: Router = Router()

router.get('/users', usersController.showAll)
router.get('/users/:id', usersController.showOne)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.remove)


router.get('/users/:id/comments', commentsController.showAll);
router.post('/users/:id/comments', commentsController.create);
router.put('/users/:id/comments/:id', commentsController.update);
router.delete('/users/:id/comments/:id', commentsController.remove);

export { router }


