/* my code*/
// const port = 8080;
// const https = require('https');
// const express = require('express');
// const app = express();

// // const hostname = '127.0.0.1';
// const fs = require('fs');
// const httpsOptions = {
//     key:fs.readFileSync('./key.pem'),
//     cert:fs.readFileSync('./cert.pem')
// }
// const server = https.createServer(httpsOptions,app);

// app.get('/',(request,response)=>{
//     //console.log(request,"request")
//     response.send("Hello world")
//    // response.json({info: 'node.js,Express abd Rest API'})
// })

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
// // });
 
// server.listen(port, () => {
//     console.log(`https running on port ` + port +'example');
//   });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });

/* following is the abeeb code*/
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};
const server = https.createServer(httpsOptions, app);
app.get('/', (req, res) => {
  res.send('Hello world');
});
server.listen(8080, () => {
  console.log('Server listening on 8080');
});