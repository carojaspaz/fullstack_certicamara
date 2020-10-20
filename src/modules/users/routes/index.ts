import { Router } from 'express'

// Import Controllers
import {
    wellcomeUserController,
    loginUserController
} from '../controllers'

const userRouter : Router = Router()

userRouter.get('/user/wellcome/:name',
    (req, res) => wellcomeUserController.execute(req, res))

userRouter.post('/user',
    (req, res) => loginUserController.execute(req, res))

export { userRouter }