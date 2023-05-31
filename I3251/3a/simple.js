const express = require("express");

const app = express();

app.use(express.static('view'))
app.get("/", (req, res)=>{
  res.send("Hello World!");
});
app.listen(3000, () => console.log("Server running on port 3000"));