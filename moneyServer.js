const express = require('express');
const Web3 = require('web3');

const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "canoe salon proud kitten shoulder hidden copper tell under either chalk lazy"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/e560c1ef1b0347bf8b88a8a514bd7dac");

const web3 = new Web3(provider);
const app = express();

app.get('/send/:address',  async (req, res)=> {
    const address = req.params.address;

        let accounts =  await web3.eth.getAccounts();

        let transaction = await web3.eth.sendTransaction(
            {
                from:accounts[0],
                value:100000000,
                to:address
            }
        )

    res.send('Hello World!'+transaction.id);
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});