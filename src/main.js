const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('29b1c5154dce68a79c31b6b794b606077666788bacf9da116b785820b52fadd4');
const myWalletAddress = myKey.getPublic('hex');


let sandlexCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
sandlexCoin.addTransaction(tx1);

console.log('\n Starting miner...');
sandlexCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance on this wallet is', sandlexCoin.getBalanceOfAddress(myWalletAddress));