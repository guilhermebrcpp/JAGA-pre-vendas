import router from './mainRouter.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}/`)
})