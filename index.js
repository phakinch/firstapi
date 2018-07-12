var express = require("express");
var app = express();

app.get('/web/:id/:id2',function(req,res){
    res.send("Multiplied "+req.params.id+"x"+req.params.id2+"="+(req.params.id*req.params.id2) );

});

app.listen(3000,function(){
   console.log("server start port is 3000");
});
