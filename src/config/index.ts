// Import packages
import * as dotenv from 'dotenv'

// Init config
dotenv.config()

// Define const to export
const port = process.env.PORT || 4000

// Export configutation
export const Config = {
    port
}