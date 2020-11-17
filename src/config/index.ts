// Import packages
import * as dotenv from 'dotenv'

// Init config
dotenv.config()

// Define const to export
const port = process.env.PORT || 4000
const urlDatabase = process.env.DATA_DB_URL || 'XXXX'
const jwtSecret = process.env.JWT_SECRET || 'MDJPPt3O5CDfhueyi0uV'
const awsBucket = process.env.AWS_BUCKET || "fullstack-demo"
const awsId = process.env.AWS_ID || ""
const awsSecret = process.env.AWS_SECRET || ""
const awsRegion = process.env.AWS_REGION || ""

// Export configutation
export const Config = {
    port,
    urlDatabase,
    jwtSecret,
    awsBucket,
    awsId,
    awsSecret,
    awsRegion
}