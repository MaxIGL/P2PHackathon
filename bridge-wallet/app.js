const express = require('express')
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const port = 3000;
const host = '0.0.0.0'
const chainId = 43113
const vaultAddress = ""

const web3 = new Web3("https://api.avax-test.network/ext/bc/C/rpc");

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.post('/transfert', function (req, res) {
  //if(req.body.event != "EVENT_TRANSFER") 
    //return res.sendStatus(422);
  console.log(req.body);
  

  data = req.body.data;

  if(data.transaction.chainId != chainId) 
    return res.sendStatus(422);

  //tokenAddress = data.transaction.to;
  //from_ = data.transaction.from;


  d = web3.utils.toAscii(data.transaction.data)

  console.log(d)

  res.sendStatus(200);

  // Run withdraw to end Blockchain

  
})


app.listen(port, host)
console.log("Currently listening http://:"+host+':'+port.toString())