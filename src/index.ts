import express from "express"
import { Request, Response } from "express"
import dotenv from "dotenv"
import mainRoutes from './routes/api'

dotenv.config()

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(mainRoutes)
app.use((req: Request, res: Response) => {
    res.status(404)
    res.json({"error": 'Endpoint não encontrado'});
})

app.listen(process.env.PORT, () => {
    console.log("Servidor online")
})