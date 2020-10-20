import { LoginUserDto } from '../dtos'

export interface IUserRepo {
    login(userLogin: LoginUserDto): Promise<any>
}

export class UserRepository implements IUserRepo {
    login(userLogin: LoginUserDto): Promise<any> {
        return new Promise((resolve, reject) => {
            if(userLogin.email === 'demo@yopmail.com' && userLogin.password === '123'){
                resolve(true)            
            } else {
                resolve(false)
            }            
        })        
    }
    
}