import { Either, Result } from "../../../core";

type Response = Either<
    Result<any>,
    Result<void>>

export interface IClientRepo {
    updateClientPic(id: string, url: string) : Promise<Response>
}

export class ClientRepository implements IClientRepo {
    
    private models: any;

    constructor(models: any){
        this.models = models
    }

    public async updateClientPic(id: string, url: string): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    
}