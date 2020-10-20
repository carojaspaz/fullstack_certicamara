import { UserRepository } from './user.repository'

// Inject Models
const userRepository = new UserRepository()

export {
    userRepository,
}