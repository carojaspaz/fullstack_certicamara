import { WellcomeUserController } from './wellcome.user.controller'
import { LoginUserController } from './login.user.controller'
// Create Service


// Inject Service
const wellcomeUserController = new WellcomeUserController()
const loginUserController = new LoginUserController()

// Export Controller
export {
    wellcomeUserController,
    loginUserController
}