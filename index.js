const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('csr.pem')
};

app.use('/tesst', (req, res)=>{
    res.send({
        message:"okok"
    })
})

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);