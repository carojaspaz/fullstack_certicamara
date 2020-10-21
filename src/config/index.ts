// Import packages
import * as dotenv from 'dotenv'

// Init config
dotenv.config()

// Define const to export
const port = process.env.PORT || 4000
const urlDatabase = process.env.DATA_DB_URL || 'XXXX'

// Export configutation
export const Config = {
    port,
    urlDatabase
}