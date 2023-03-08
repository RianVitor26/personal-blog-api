import { Router } from 'express'
import { usersController } from '../controllers/UsersController' 
import { Auth } from '../middlewares/AuthMiddleware';

const UsersRoute: Router = Router()

UsersRoute.get('/users', usersController.showAll)

UsersRoute.use(Auth.isAuthenticated);

UsersRoute.get('/users/:id', usersController.showOne)
UsersRoute.post('/users', usersController.create)
UsersRoute.put('/users/:id', usersController.update)
UsersRoute.delete('/users/:id', usersController.remove)

export { UsersRoute }


