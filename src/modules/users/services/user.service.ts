
import { LoginUserDto } from '../dtos'
import { userRepository } from '../repository'

export interface IUserService {
    login(userLogin: LoginUserDto): Promise<any>
}

export class UserService implements IUserService{
    login(userLogin: LoginUserDto): Promise<any> {
        return userRepository.login(userLogin)
    }    
}