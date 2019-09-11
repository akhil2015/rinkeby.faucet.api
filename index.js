const express = require('express')
const app = express()
const router = require('./routes/faucetRoutes')
const config = require('./config')

app.use('/', router)

app.listen(config.PORT, () => console.log(`Rinkeby faucet started on ${config.PORT}:`))