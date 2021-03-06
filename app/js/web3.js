var web3url = "http://localhost:8545";

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider(web3url));
}

console.log(web3.version)
console.log(web3.modules)
console.log(web3.utils)

var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase);
