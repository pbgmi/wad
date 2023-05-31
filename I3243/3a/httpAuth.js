var express = require("express");
var app = express();

var basicAuth = require("express-basic-auth");

var authFunction = function(req,res,next){
    var user = basicAuth(req);
    if(!user || !user.name  || !user.pass ){
        res.set("WWW-Authenticate", "Basic ");
        res.sendStatus(401);
        return;
    }
    if (user.name === "admin" && user.pass === "supersecret"){
        next();
    }
    else{

        res.set("WWW-Authenticate", "Basic ");
        res.sendStatus(401);
        return;
    }
    
}
app.get("/login", authFunction,(req, res)=>{
    res.send("Hello World!");
});
app.listen(4000, () => console.log("Server running on port 4000"));