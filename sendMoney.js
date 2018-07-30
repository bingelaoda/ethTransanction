var web3 = require('web3');

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "canoe salon proud kitten shoulder hidden copper tell under either chalk lazy"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/e560c1ef1b0347bf8b88a8a514bd7dac");

var web3 = new Web3(provider);


sendMoney = async ()=>{
   let accounts =  await web3.eth.getAccounts();
    console.log(await web3.eth.getBalance(accounts[0]));
   let transaction = await web3.eth.sendTransaction(
        {
            from:accounts[0],
            value:1000000,
            to:'0xbb4329f31f684d4aC7cA744467EA3231cE54FD9a'
        }
    )

    console.log(await web3.eth.getBalance(accounts[0]));
}
sendMoney()