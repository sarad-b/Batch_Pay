
const assert = require('assert');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const {interface,bytecode} = require('../compile');
const provider = new HDWalletProvider(
  'desert please analyst lion uncover delay list share suggest rain history now',
'https://ropsten.infura.io/v3/7fade9850d5f4719a888e956c417cd8d'
);
const web3 = new Web3(provider);

const web3 = new Web3(provider);
let accounts;
let contract;
const chandler = ['0xCFC749e90D99bEeF9e80340e9FFb6C813A49B6eC','0x5803f2F38d84bA5CAc6B78bD26d62225BD42D673'];
const balances = [5000000000000, 5000000000000];





const deploy = async() => {
const accounts = await web3.eth.getAccounts();
console.log("Attempting to deploy using "+accounts[0]);
const deployedContract = await new web3.eth.Contract(JSON.parse(interface))
          .deploy({data: bytecode, arguments: [7]})
          .send({gas:'1000000', from: accounts[0]});
console.log("Contract deployed to "+ deployedContract.options.address)
let balance = await web3.eth.getBalance(deployedContract.options.address);
  console.log("Balance here in the contract is" + balance);
  const ownerAddress = await deployedContract.methods.owner().call();
  console.log("Owner Address is "+ ownerAddress);
  const ownerBalance = await web3.eth.getBalance(ownerAddress);
  console.log("Owner Balance is " + ownerBalance);
  console.log("Sending balance to the contract");
  //  let val = await deployedContract.methods.transfer(ownerAddress,"0xCFC749e90D99bEeF9e80340e9FFb6C813A49B6eC",100).send({from:accounts[0]});
await deployedContract.methods.addEther().send({
  from: accounts[0],
  value: 1500000000000000,
  gas: 1000000
});
balance = await web3.eth.getBalance(deployedContract.options.address);;
console.log("New Balance is: " + balance);
for(int i = 0; i < )
await deployedContract.methods.sendEther(chandler,balances).send({
  from: accounts[0],
  gas: 10000000
});
balance = await web3.eth.getBalance(deployedContract.options.address);;
console.log("New Balance is: " + balance);
const val = await deployedContract.methods.num().call();
console.log(val);
};
deploy();
