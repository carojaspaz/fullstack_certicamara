import * as mongose from 'mongoose'
import * as bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongose.Schema({
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
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    }
}, { versionKey: false})


userSchema.pre('save', true, async function(next, done){
    const user = this
    if(user.isNew){
        if(!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(user.get('password')))){
            user.invalidate('password', 'La constaseña no cumple con los requerimientos minimos de seguridad')
            done(new Error('Contraseña invalida'))
        } else {
            const hashPassword = await bcrypt.hash(user.get('password'), 10)
            user.set('password', hashPassword)
        }
    }
    next()
    done()
})

userSchema.methods.CreateUser = async function(raw: any): Promise<any> {
    const user = new User(raw)
    await user.save()
    return user._id
}

const User = mongose.model('User', userSchema)

export { User }
