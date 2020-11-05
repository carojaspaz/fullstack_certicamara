import * as mongoose from 'mongoose'

import validator from 'validator'

import { documentType, phoneType, addressType, productType } from '../customTypes'

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    sureName: {
        type: String,
        required: [true, 'Apellido requerido'],
    },
    identification: documentType,
    phones: [phoneType],
    email: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: props => 'Email invalido'
        }
    },
    products: [productType],
    address: addressType,
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false
    }
}, { versionKey: false, collection: 'client' })

const Client = mongoose.model('Client', clientSchema)
export { Client }