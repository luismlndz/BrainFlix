const express = require('express')
const app = express()
const videoRoutes = require('./routes/videos')
const cors = require('cors')

require('dotenv').config()
const { PORT, BACKEND_URL } = process.env

app.use(cors())
app.use(express.json())
app.use('/videos', videoRoutes)

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})