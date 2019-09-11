const EthereumTx = require('ethereumjs-tx').Transaction

const {ADDRESS,PRIVATEKEY,PROVIDER,AMOUNT} = require("../config")
const WEB3 = require("web3")
const web3 = new WEB3(PROVIDER)

const gasPriceGwei = 25
const gasLimit = 1500000



async function sendFunds(receiver){    
    const nonce = await web3.eth.getTransactionCount(ADDRESS)
    console.log("fetched nonce is ",nonce)
    const txParams = {
        nonce: web3.utils.toHex(nonce),
        gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
        gasLimit: web3.utils.toHex(gasLimit),
        to: receiver,
        value: web3.utils.toHex(AMOUNT),
    }
    const tx = new EthereumTx(txParams,{ chain: 'rinkeby'})
    tx.sign(Buffer.from(PRIVATEKEY,'hex'))
    const serializedTx = tx.serialize()
    const receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex') )
    return receipt
}
module.exports = {
    sendFunds
}