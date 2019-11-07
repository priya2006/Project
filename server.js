const express = require("express");
const path = require('path')
const app = express();
 
app.use(express.static('public'));
 
// //make way for some custom css, js and images
// app.use('/css', express.static(__dirname + '/public/css'));
// app.use('/js', express.static(__dirname + '/public/js'));
// app.use('/images', express.static(__dirname + '/public/images'));
app.use("/",(req,res)=>res.sendFile(path.resolve(__dirname + "/main.html"))) 

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});