import { Router } from 'express'
import { testController } from '../controllers/TestController'

const router: Router = Router()

router.get('/', testController.index)

export { router }


