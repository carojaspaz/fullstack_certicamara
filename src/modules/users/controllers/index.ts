import { WellcomeUserController } from './wellcome.user.controller'
import { LoginUserController } from './login.user.controller'
import { CreateUserController } from './create.user.controller'

// Create Service
import { UserService } from '../services/user.service'
const userService = new UserService()

// Inject Service
const wellcomeUserController = new WellcomeUserController()
const loginUserController = new LoginUserController(userService)
const createUserController = new CreateUserController(userService)

// Export Controller
export {
    wellcomeUserController,
    loginUserController,
    createUserController
}