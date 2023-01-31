import { Router } from 'express'
import { testController } from '../controllers/TestController'
import { usersController } from '../controllers/UsersController' 

const router: Router = Router()

router.get('/test', testController.index)

router.get('/', usersController.index)
router.get('/users', usersController.showAll)
router.get('/users/:id', usersController.showOne)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.destroy)


export { router }


