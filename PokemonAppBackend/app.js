const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
    cors({
        origin: ["https://localhost:3000","pokemon-react-memory-game.onrender.com"],
    })
)