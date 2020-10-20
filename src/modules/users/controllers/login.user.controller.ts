import { BaseController } from '../../../core'

import { LoginUserDto } from '../dtos'

export class LoginUserController extends BaseController {
    
    protected executeImpl(): Promise<any> {
        try {
            const dto : LoginUserDto = this.req.body as LoginUserDto
            if(dto.password === '123'){
                return this.ok("Login acepted")
            } else {
                return this.forbbiden()
            }
        } catch(error){
            return this.fail(error)
        }
    }    
}