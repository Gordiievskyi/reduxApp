"use strict"
let express = require('express');
let app = express();
let path = require('path');
app.use(express.static('public'));
app.get('/',function(req,resp){
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})

app.listen(3000,function(){
    console.log('app is listenning on port 3000');
})