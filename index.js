var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')
var cors = require('cors')
const bodyParser = require('body-parser')
var port = process.env.PORT || '3000';

/**var certOptions = {
  key: fs.readFileSync(path.resolve('../openSSL/server.key')),
  cert: fs.readFileSync(path.resolve('../openSSL/server.crt'))
}**/

var app = express()

app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

// GET method route
app.get('/', function (req, res) {
	console.log('Welcome GET')
  	res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
	console.log('Welcome POST',req.body)
	let ret = {api:"AGENT",event:"AGENT_ERROR_MESSAGE",ref:23,data:{error_message:"you_dont_have_call_license"}}
  	if(req.body.data && req.body.data.called_number == '0102030405')
  		res.send(JSON.stringify(ret));
  	else
  		res.send(JSON.stringify({}));
});

//var server = https.createServer(certOptions, app).listen(443, ()=>console.log("OKAY"))
app.listen(port, () =>
console.log(`Example app listening on port ${port}!`),
);

