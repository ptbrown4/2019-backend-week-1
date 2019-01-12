const express = require('express');
const app = express();
const port = '3000'

app.get('/', function(req, res){
    res.send("Welcome to my webpage!");
});

app.get('/helloworld', function(req, res){
    res.send("<html><h1>Hello World</h1></html>");
});

app.put('/', function(req, res) {
    res.send("<h1>You put something here</h1>");
});

app.listen(port, function(){
    console.log("Express running on port " + port);
});