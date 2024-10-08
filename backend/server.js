import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config()

const connectionStr = process.env.MONGO_URI.replace(`<password>`, process.env.MONGO_DB_ATLAS_PASSWORD).replace('<username>',process.env.MONGO_DB_ATLAS_USERNAME)

connectDB(connectionStr)

const port = process.env.PORT || 8001
const host = process.env.host || '127.0.0.1'
app.listen(port, host, ()=> console.log(`The server is listening on port ${port}`))
