import { clientRepository } from '../repository'

import { loadProfilePic, deleteProfilePic } from '../../../core/services/s3/aws.service'

export interface IClientService {
    updatePictureClient(id: string, url: string): Promise<any>
    uploadPictureClient(file: any, id: string, name: string): Promise<any>
    deletePictureCliente(id: string, name: string)
}

export class ClientService implements IClientService {
    async deletePictureCliente(id: string, name: string) {
        return await deleteProfilePic(id, name)
    }
    async uploadPictureClient(file: any, id: string, name: any): Promise<any> {
        return await loadProfilePic(file, id, name)
    }
    async updatePictureClient(id: string, url: string): Promise<any> {
        return await clientRepository.updateClientPic(id, url)
    }
}