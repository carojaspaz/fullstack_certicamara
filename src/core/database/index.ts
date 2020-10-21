import Mongoose from 'mongoose'

import { Config } from '../../config'


const connectDb = () => {
    return Mongoose.connect(`${Config.urlDatabase}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .catch(error => console.log({
        description: "Error connection",
        stringConnection: Config.urlDatabase,
        error: error
    }));
}

const models = {

}

export { connectDb, models }