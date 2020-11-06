import * as express from 'express'

import { userRouter, clientRouter } from '../../../modules'

const router = express.Router()

router.use('/v1',
    userRouter,
    clientRouter
)

export { router }