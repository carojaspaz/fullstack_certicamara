import { BaseController } from '../../../core'

export class WellcomeUserController extends BaseController {
        
    protected executeImpl(): Promise<any> {
        try{
            const name = this.req.params.name
            return this.ok(`Bienvenido ${name}`)
        } catch(error){
            return this.fail(error);
        }
    }    
}