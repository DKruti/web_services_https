const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
//const PORT = process.env.PORT || 8080;
const port=8080;

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};
const server = https.createServer(httpsOptions, app);
app.get('/', (req, res) => {
    res.send('Hello world');
  });
app.get('/alive', (req, res) => {
    console.log('web service is alive');
    res.send('web service is on alive page');
  });

app.get('/startup',(req,res)=>{
    res.send("web services are started");
    console.log("web service started call");
})
// GET Route with custom headers

app.get('/set-header', (req, res) => {

  // Set custom response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Custom-Header', 'Hello from GET route');
  // Send a JSON response
  res.send({ message: 'This is a GET request' });
 });

  server.listen(port, () => {
    console.log('Server listening on'+ port);
  });