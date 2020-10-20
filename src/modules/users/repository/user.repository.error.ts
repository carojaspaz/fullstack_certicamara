import { DomainError, Result } from '../../../core'

export namespace UserErrors {
    export class AccountAlreadExists extends Result<DomainError> {
        constructor(email: string){
            super(false, {
                message: `The email ${email} is registered`
            } as DomainError)
        }
    }

    export class AccountDoesNotExists extends Result<DomainError> {
        constructor(email: string){
            super(false, {
                message: `The email ${email} is not registered`
            } as DomainError)
        }
    }

    export class PasswordNotMatch extends Result<DomainError> {
        constructor(){
            super(false, {
                message: `Wrong password`
            } as DomainError)
        }
    }
}