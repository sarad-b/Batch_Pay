const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const assert = require('assert');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const {interface,bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'desert please analyst lion uncover delay list share suggest rain history now',
'https://ropsten.infura.io/v3/1f79508c7e58448c8fe7248222dc3133'
);
const web3 = new Web3(provider);

let accounts = [];    //Holds all the accounts to transfer money to
let amounts = [];      //Holds amounts for corresponding accounts
let sendAddress;      //Address of the sender



app.use(express.static(__dirname));      //Send statics
app.use(bodyParser.urlencoded({extended:true}));   //To use body.<attribute> of the post request


app.get('/', (req,res) => {
  //Send the homepage on the request of '/'
  res.sendFile(__dirname+'index.html');
})


function manageInput(req){
  sendAddress = req.body.sender;
  let batch = req.body.batch.split('\n');
  for(i = 0; i < batch.length; i++){
    let split_data = batch[i].split(',');
    accounts.push(split_data[0]);
    amounts.push(parseInt(split_data[1]));
  }
  for(i = 0;i<accounts.length;i++){
    console.log(accounts[i]+"    $"+amounts[i]);
  }
}

app.post('/', (req,res) => {
manageInput(req);

const deploy = async() => {

console.log("Attempting to deploy using "+sendAddress);

const deployedContract = await new web3.eth.Contract(JSON.parse(interface))
          .deploy({data: bytecode, arguments: [7]})
          .send({gas:'1000000', from: sendAddress});
console.log("Contract deployed to "+ deployedContract.options.address);

let balance = await web3.eth.getBalance(deployedContract.options.address);
  console.log("Balance here in the contract is" + balance);
  const ownerAddress = await deployedContract.methods.owner().call();
  console.log("Owner Address is "+ ownerAddress);
  const ownerBalance = await web3.eth.getBalance(ownerAddress);
  console.log("Owner Balance is " + ownerBalance);
  console.log("Sending balance to the contract");

  //  let val = await deployedContract.methods.transfer(ownerAddress,"0xCFC749e90D99bEeF9e80340e9FFb6C813A49B6eC",100).send({from:accounts[0]});


await deployedContract.methods.addEther().send({
  from: sendAddress,
  value: 6000000000000000,
  gas: 1000000
});
balance = await web3.eth.getBalance(deployedContract.options.address);
console.log("New Balance is: " + balance);


console.log("SENDING MONEY NOW");

  await deployedContract.methods.sendEther(accounts,amounts).send({
    from: sendAddress,
    gas: 10000000
  });








balance = await web3.eth.getBalance(deployedContract.options.address);;
console.log("New Balance is: " + balance);
const val = await deployedContract.methods.num().call();
console.log(val);
}


deploy();


});



app.listen(3000, (req,res) => {
  console.log("Running the program here");
})
