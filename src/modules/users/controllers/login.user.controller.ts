import { BaseController } from '../../../core'

import { IUserService, UserService } from '../services/user.service'
import { LoginUserDto } from '../dtos'

export class LoginUserController extends BaseController {
    
    constructor(private readonly userService: IUserService){
        super()
    }

    async executeImpl(): Promise<any> {
        try {          
            const dto : LoginUserDto = this.req.body as LoginUserDto
            const result = await this.userService.login(dto)        
            if(result)
                return this.ok()
            else
                return this.forbbiden()
        } catch(error){
            return this.fail(error)
        }
    }    
}