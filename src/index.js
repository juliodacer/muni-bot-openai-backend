const express = require('express')
const apiRoute = require('./routes/route')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api", apiRoute)
app.listen(port, () => { console.log("El puerto es: " + port) });