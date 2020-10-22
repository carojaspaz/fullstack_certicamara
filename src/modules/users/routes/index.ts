import { Router } from 'express'

// Middleware
import { auth } from '../../../core'

// Import Controllers
import {
    wellcomeUserController,
    loginUserController,
    createUserController
} from '../controllers'

const userRouter : Router = Router()

userRouter.get('/user/wellcome/:name', auth,
    (req, res) => wellcomeUserController.execute(req, res))

userRouter.post('/user',
    (req, res) => loginUserController.execute(req, res))

userRouter.post('/user/create',
    (req, res) => createUserController.execute(req, res))

export { userRouter }