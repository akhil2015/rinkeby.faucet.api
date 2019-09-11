const dotenv = require("dotenv") 
dotenv.config()
const config = {
    PORT:process.env.PORT,
    PRIVATEKEY:process.env.PRIVATEKEY,
    ADDRESS:process.env.ADDRESS,
    PROVIDER:process.env.PROVIDER,
    AMOUNT:100000000000000000                   //amount in wei
}
module.exports =  config