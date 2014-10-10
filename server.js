var fs = require("fs"),
    MockFilepath=__dirname+ '/data/MOCK_DATA.json',
    MockAdditional = __dirname + '/data/ADDITIONAL_DATA.json';

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/bower_components'));

app.get('/api/user/list', function(req, res){
    var file = fs.readFileSync(MockFilepath, 'utf8');
    res.send(JSON.parse(file));
 });

app.get('/api/user/more', function(req, res){
    var file = fs.readFileSync(MockAdditional, 'utf8');
    res.send(JSON.parse(file));
});

app.listen(3000, function() { console.log('listening')});
