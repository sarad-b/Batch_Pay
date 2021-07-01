const fs  = require('fs');
const path = require('path');
const solc = require('solc');

const filePath = path.resolve(__dirname,"contracts","BatchPay.sol");
const data = fs.readFileSync(filePath,'utf8');
const compiled = solc.compile(data,1).contracts[':BatchPay'];
module.exports = compiled;
