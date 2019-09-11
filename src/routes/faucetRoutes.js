const express = require('express')
const router = express.Router()
const { sendFunds } = require('../services/faucetService')

router.get('/drip', function(req, res) {
    sendFunds(req.query.address).then(receipt=>{
        console.log(receipt)
        res.status(200).send("funded successfully")
    }).catch(err=>{
        res.status(500).send(err)
    })
})

module.exports = router