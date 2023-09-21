// const http = require('http');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;
 
app.get('/',(request,response)=>{
    console.log(request,"request")
    //response.send("Hello world")
    response.json({info: 'node.js,Express abd Rest API'})
})
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
app.listen(port, hostname, () => {
    console.log(`Server running `);
  });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });