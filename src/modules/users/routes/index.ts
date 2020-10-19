import { Router } from 'express'

const userRouter : Router = Router()

userRouter.get('/user/wellcome',
    (req, res) => {
        res.send('Bienvendido Usuario')
    })

export { userRouter }