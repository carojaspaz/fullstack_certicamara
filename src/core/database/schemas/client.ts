import * as mongoose from 'mongoose'

import { documentType } from '../customTypes'

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    identification: documentType,
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false
    }
}, { versionKey: false, collection: 'client' })

const Client = mongoose.model('Client', clientSchema)
export { Client }