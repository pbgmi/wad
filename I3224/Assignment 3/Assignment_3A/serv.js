const express = require('express');
const abc = express();

const path = require("path")

const PORT = 8000

abc.use(express.static('public'));

abc.get('/', function(req, res) {
res.send('Hello World!');
});

abc.listen(PORT, function(){

console.log(`Server listening on port::${PORT}`);

});

Sample.js
var exp = require("express")

var app = exp()

const PORT =3000
app.get("/", (req,res)=> {

res.end("This is sample program")
})

app.listen(PORT,()=>{
console.log(`server is running on port on ${PORT}`)
})

a.html
<html>
<body>
<h1> This is an example of serving static files</h1>
<table>
<tr>
<th> First Name</th>
<th> Last Name </th>

</tr>

<tr>
<td>samarth</td>
<td>pagar</td>
</tr>

<tr>
<td> devesh </td>
<td> Sonawane </td>
</tr>
</table>
</body>
</html>