'use strict';

var port = process.env.PORT || 1337;
var express = require("express");

const app = express()

app.use('/scripts',express.static('scripts'));
app.use('/style',express.static('style'));

app.get('/', (request, response) => {
response.set('Content-Type', 'text/html');
response.sendFile('index.ejs', {root: __dirname })
})

app.listen(port, (err) => {
if (err) {
return console.log('something bad happened', err)
}
})
