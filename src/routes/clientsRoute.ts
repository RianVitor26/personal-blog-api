import { Router } from 'express'
import { usersController } from '../controllers/UsersController' 

const router: Router = Router()

router.get('/users', usersController.showAll)
router.get('/users/:id', usersController.showOne)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.remove)

export { router }


