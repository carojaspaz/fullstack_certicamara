import { Either, Result } from "../../../core";

type Response = Either<
    Result<any>,
    Result<void>>

export interface IClientRepo {
    updateClientPic(id: string, url: string) : Promise<Response>
    registerClient(clientDto: any): Promise<Response>
    getClientByEmail(email: string): Promise<Response>
}

export class ClientRepository implements IClientRepo {
    
    private models: any;

    constructor(models: any){
        this.models = models
    }
    getClientByEmail(email: string): Promise<Either<Result<any>, Result<void>>> {
        //TODO: 1 Devolver la información del cliente con su lista de cuentas asociadas
        throw new Error("Method not implemented.");
    }
    public async registerClient(clientDto: any): Promise<Response> {
        //TODO: 1. Registrar cliente en la base de datos
        //TODO: 2. Crear usuario
        //         Validar que se cree el usuario
        //TODO: 3. Actualización del cliente
        //         Asignar el usuario creado al cliente
        throw new Error("Method not implemented.");
    }

    

    public async updateClientPic(id: string, url: string): Promise<Response> {
        //TODO: 1. Cargar imagen en S3
        //TODO: 2. Actualizar el campo urlPicture del cliente
        throw new Error("Method not implemented.");
    }
    
}