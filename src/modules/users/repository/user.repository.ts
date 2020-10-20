import { LoginUserDto } from '../dtos'

// Error handleing
import { Either, GenericAppError, Result, left, right } from '../../../core'
import { UserErrors } from './user.repository.error'
import { resolve } from 'path'

type Response = Either<
    GenericAppError.UnexpectedError |
    GenericAppError.NotFoundError |
    UserErrors.AccountAlreadExists | 
    UserErrors.AccountDoesNotExists |
    UserErrors.PasswordNotMatch |
    UserErrors.InvalidUser |
    Result<any>,
    Result<void>>


export interface IUserRepo {
    login(userLogin: LoginUserDto): Promise<Response>
}

export class UserRepository implements IUserRepo {
    login(userLogin: LoginUserDto): Promise<Response> {    
        if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userLogin.email))){
            return new Promise((resolve, reject) => {
                resolve(left(new UserErrors.InvalidUser(userLogin.email)) as Response)
            })
        }    
        if(userLogin.email !== 'demo@yopmail.com'){
            return new Promise((resolve, reject) => {
                resolve(left(new UserErrors.AccountDoesNotExists(userLogin.email)) as Response)
            })
        }
        if(userLogin.password !== '123'){
            return new Promise((resolve, reject) => {
                resolve(left(new UserErrors.PasswordNotMatch()) as Response)
            })
        }
        return new Promise((resolve, reject) => {
            resolve(right(Result.ok<any>("Sesión iniciada")) as Response)
        })
    }
}